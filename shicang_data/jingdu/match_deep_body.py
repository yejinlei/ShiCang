#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""为 deep_works.json 匹配完整正文 - 仅从mingpian(7046选本)匹配，速度最快"""
import json, os, re

ROOT = '/home/user/workspace/shicang-deploy/shicang_data'
DEEP = os.path.join(ROOT, 'jingdu/deep_works.json')
MINGPIAN = os.path.join(ROOT, 'mingpian/all.json')


def norm(s):
    if not s: return ''
    s = str(s)
    s = re.sub(r'[\s·•·，。！？；：、,.!?;:）(（)）【】\[\]·\u3000·"\'""''《》…—\-_]', '', s)
    s = re.sub(r'(其一|其二|其三|其四|其五|其六|其七|其八|其九|选录|节选|外一首|之一|之二|之三)$','', s)
    return s


def main():
    deep = json.load(open(DEEP,'r',encoding='utf-8'))
    works = deep['works']
    mp = json.load(open(MINGPIAN,'r',encoding='utf-8'))
    print(f'depth works: {len(works)}  mingpian: {len(mp)}')

    # 预建作者索引加速
    by_author = {}
    for p in mp:
        pa = norm(p.get('author',''))
        by_author.setdefault(pa, []).append(p)

    hit_mp = 0; miss = 0; skipped = 0
    for w in works:
        cur = w.get('lines') or []
        if len(cur) >= 2 and max(len(x) for x in cur) >= 4:
            skipped += 1
            continue
        t, a = norm(w['title']), norm(w['author'])
        found = None
        if a and a in by_author:
            for p in by_author[a]:
                pt = norm(p.get('title',''))
                if pt == t:
                    found = p; break
        # 兜底：全量搜索
        if not found:
            for p in mp:
                pt = norm(p.get('title',''))
                pa = norm(p.get('author',''))
                if pt == t and (not a or a in pa or pa in a):
                    found = p; break
        if found:
            w['lines'] = found.get('body') or [w.get('incipit','')]
            w['body_source'] = 'anthology'
            hit_mp += 1
        else:
            w['lines'] = [w.get('incipit','')]
            w['body_source'] = 'incipit'
            miss += 1

    print(f'已完整: {skipped}  选本命中: {hit_mp}  仅首句: {miss}')
    full = sum(1 for w in works if w.get('body_source')=='anthology')
    print(f'有完整正文: {full+skipped}/{len(works)}')

    with open(DEEP,'w',encoding='utf-8') as f:
        json.dump(deep, f, ensure_ascii=False, indent=1)
    print(f'已写入 {DEEP}')

if __name__ == '__main__':
    main()
