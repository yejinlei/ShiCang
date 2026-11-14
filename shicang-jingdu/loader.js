// 诗精读数据加载器 v4.5
const POEM_BOOKS = [

  // 全宋诗 (chinese-poetry)
  { id: 'cpo_songshi', title: '全宋诗', author: '御定', dynasty: '宋', type: 'shi',
    volumes: [
      { start: 0, file: '../shicang_data/cpo_songshi_0.json' },
      { start: 1000, file: '../shicang_data/cpo_songshi_1000.json' },
      { start: 2000, file: '../shicang_data/cpo_songshi_2000.json' },
      { start: 3000, file: '../shicang_data/cpo_songshi_3000.json' },
      { start: 4000, file: '../shicang_data/cpo_songshi_4000.json' },
      { start: 5000, file: '../shicang_data/cpo_songshi_5000.json' },
      { start: 6000, file: '../shicang_data/cpo_songshi_6000.json' },
      { start: 7000, file: '../shicang_data/cpo_songshi_7000.json' },
      { start: 8000, file: '../shicang_data/cpo_songshi_8000.json' },
      { start: 9000, file: '../shicang_data/cpo_songshi_9000.json' },
      { start: 10000, file: '../shicang_data/cpo_songshi_10000.json' },
      { start: 11000, file: '../shicang_data/cpo_songshi_11000.json' },
      { start: 12000, file: '../shicang_data/cpo_songshi_12000.json' },
      { start: 13000, file: '../shicang_data/cpo_songshi_13000.json' },
      { start: 14000, file: '../shicang_data/cpo_songshi_14000.json' },
      { start: 15000, file: '../shicang_data/cpo_songshi_15000.json' },
      { start: 16000, file: '../shicang_data/cpo_songshi_16000.json' },
      { start: 17000, file: '../shicang_data/cpo_songshi_17000.json' },
      { start: 18000, file: '../shicang_data/cpo_songshi_18000.json' },
      { start: 19000, file: '../shicang_data/cpo_songshi_19000.json' },
      { start: 20000, file: '../shicang_data/cpo_songshi_20000.json' },
      { start: 21000, file: '../shicang_data/cpo_songshi_21000.json' },
      { start: 22000, file: '../shicang_data/cpo_songshi_22000.json' },
      { start: 23000, file: '../shicang_data/cpo_songshi_23000.json' },
      { start: 24000, file: '../shicang_data/cpo_songshi_24000.json' },
      { start: 25000, file: '../shicang_data/cpo_songshi_25000.json' },
      { start: 26000, file: '../shicang_data/cpo_songshi_26000.json' },
      { start: 27000, file: '../shicang_data/cpo_songshi_27000.json' },
      { start: 28000, file: '../shicang_data/cpo_songshi_28000.json' },
      { start: 29000, file: '../shicang_data/cpo_songshi_29000.json' },
      { start: 30000, file: '../shicang_data/cpo_songshi_30000.json' },
      { start: 31000, file: '../shicang_data/cpo_songshi_31000.json' },
      { start: 32000, file: '../shicang_data/cpo_songshi_32000.json' },
      { start: 33000, file: '../shicang_data/cpo_songshi_33000.json' },
      { start: 34000, file: '../shicang_data/cpo_songshi_34000.json' },
      { start: 35000, file: '../shicang_data/cpo_songshi_35000.json' },
      { start: 36000, file: '../shicang_data/cpo_songshi_36000.json' },
      { start: 37000, file: '../shicang_data/cpo_songshi_37000.json' },
      { start: 38000, file: '../shicang_data/cpo_songshi_38000.json' },
      { start: 39000, file: '../shicang_data/cpo_songshi_39000.json' },
      { start: 40000, file: '../shicang_data/cpo_songshi_40000.json' },
      { start: 41000, file: '../shicang_data/cpo_songshi_41000.json' },
      { start: 42000, file: '../shicang_data/cpo_songshi_42000.json' },
      { start: 43000, file: '../shicang_data/cpo_songshi_43000.json' },
      { start: 44000, file: '../shicang_data/cpo_songshi_44000.json' },
      { start: 45000, file: '../shicang_data/cpo_songshi_45000.json' },
      { start: 46000, file: '../shicang_data/cpo_songshi_46000.json' },
      { start: 47000, file: '../shicang_data/cpo_songshi_47000.json' },
      { start: 48000, file: '../shicang_data/cpo_songshi_48000.json' },
      { start: 49000, file: '../shicang_data/cpo_songshi_49000.json' },
      { start: 50000, file: '../shicang_data/cpo_songshi_50000.json' },
      { start: 51000, file: '../shicang_data/cpo_songshi_51000.json' },
      { start: 52000, file: '../shicang_data/cpo_songshi_52000.json' },
      { start: 53000, file: '../shicang_data/cpo_songshi_53000.json' },
      { start: 54000, file: '../shicang_data/cpo_songshi_54000.json' },
      { start: 55000, file: '../shicang_data/cpo_songshi_55000.json' },
      { start: 56000, file: '../shicang_data/cpo_songshi_56000.json' },
      { start: 57000, file: '../shicang_data/cpo_songshi_57000.json' },
      { start: 58000, file: '../shicang_data/cpo_songshi_58000.json' },
      { start: 59000, file: '../shicang_data/cpo_songshi_59000.json' },
      { start: 60000, file: '../shicang_data/cpo_songshi_60000.json' },
      { start: 61000, file: '../shicang_data/cpo_songshi_61000.json' },
      { start: 62000, file: '../shicang_data/cpo_songshi_62000.json' },
      { start: 63000, file: '../shicang_data/cpo_songshi_63000.json' },
      { start: 64000, file: '../shicang_data/cpo_songshi_64000.json' },
      { start: 65000, file: '../shicang_data/cpo_songshi_65000.json' },
      { start: 66000, file: '../shicang_data/cpo_songshi_66000.json' },
      { start: 67000, file: '../shicang_data/cpo_songshi_67000.json' },
      { start: 68000, file: '../shicang_data/cpo_songshi_68000.json' },
      { start: 69000, file: '../shicang_data/cpo_songshi_69000.json' },
      { start: 70000, file: '../shicang_data/cpo_songshi_70000.json' },
      { start: 71000, file: '../shicang_data/cpo_songshi_71000.json' },
      { start: 72000, file: '../shicang_data/cpo_songshi_72000.json' },
      { start: 73000, file: '../shicang_data/cpo_songshi_73000.json' },
      { start: 74000, file: '../shicang_data/cpo_songshi_74000.json' },
      { start: 75000, file: '../shicang_data/cpo_songshi_75000.json' },
      { start: 76000, file: '../shicang_data/cpo_songshi_76000.json' },
      { start: 77000, file: '../shicang_data/cpo_songshi_77000.json' },
      { start: 78000, file: '../shicang_data/cpo_songshi_78000.json' },
      { start: 79000, file: '../shicang_data/cpo_songshi_79000.json' },
      { start: 80000, file: '../shicang_data/cpo_songshi_80000.json' },
      { start: 81000, file: '../shicang_data/cpo_songshi_81000.json' },
      { start: 82000, file: '../shicang_data/cpo_songshi_82000.json' },
      { start: 83000, file: '../shicang_data/cpo_songshi_83000.json' },
      { start: 84000, file: '../shicang_data/cpo_songshi_84000.json' },
      { start: 85000, file: '../shicang_data/cpo_songshi_85000.json' },
      { start: 86000, file: '../shicang_data/cpo_songshi_86000.json' },
      { start: 87000, file: '../shicang_data/cpo_songshi_87000.json' },
      { start: 88000, file: '../shicang_data/cpo_songshi_88000.json' },
      { start: 89000, file: '../shicang_data/cpo_songshi_89000.json' },
      { start: 90000, file: '../shicang_data/cpo_songshi_90000.json' },
      { start: 91000, file: '../shicang_data/cpo_songshi_91000.json' },
      { start: 92000, file: '../shicang_data/cpo_songshi_92000.json' },
      { start: 93000, file: '../shicang_data/cpo_songshi_93000.json' },
      { start: 94000, file: '../shicang_data/cpo_songshi_94000.json' },
      { start: 95000, file: '../shicang_data/cpo_songshi_95000.json' },
      { start: 96000, file: '../shicang_data/cpo_songshi_96000.json' },
      { start: 97000, file: '../shicang_data/cpo_songshi_97000.json' },
      { start: 98000, file: '../shicang_data/cpo_songshi_98000.json' },
      { start: 99000, file: '../shicang_data/cpo_songshi_99000.json' },
      { start: 100000, file: '../shicang_data/cpo_songshi_100000.json' },
      { start: 101000, file: '../shicang_data/cpo_songshi_101000.json' },
      { start: 102000, file: '../shicang_data/cpo_songshi_102000.json' },
      { start: 103000, file: '../shicang_data/cpo_songshi_103000.json' },
      { start: 104000, file: '../shicang_data/cpo_songshi_104000.json' },
      { start: 105000, file: '../shicang_data/cpo_songshi_105000.json' },
      { start: 106000, file: '../shicang_data/cpo_songshi_106000.json' },
      { start: 107000, file: '../shicang_data/cpo_songshi_107000.json' },
      { start: 108000, file: '../shicang_data/cpo_songshi_108000.json' },
      { start: 109000, file: '../shicang_data/cpo_songshi_109000.json' },
      { start: 110000, file: '../shicang_data/cpo_songshi_110000.json' },
      { start: 111000, file: '../shicang_data/cpo_songshi_111000.json' },
      { start: 112000, file: '../shicang_data/cpo_songshi_112000.json' },
      { start: 113000, file: '../shicang_data/cpo_songshi_113000.json' },
      { start: 114000, file: '../shicang_data/cpo_songshi_114000.json' },
      { start: 115000, file: '../shicang_data/cpo_songshi_115000.json' },
      { start: 116000, file: '../shicang_data/cpo_songshi_116000.json' },
      { start: 117000, file: '../shicang_data/cpo_songshi_117000.json' },
      { start: 118000, file: '../shicang_data/cpo_songshi_118000.json' },
      { start: 119000, file: '../shicang_data/cpo_songshi_119000.json' },
      { start: 120000, file: '../shicang_data/cpo_songshi_120000.json' },
      { start: 121000, file: '../shicang_data/cpo_songshi_121000.json' },
      { start: 122000, file: '../shicang_data/cpo_songshi_122000.json' },
      { start: 123000, file: '../shicang_data/cpo_songshi_123000.json' },
      { start: 124000, file: '../shicang_data/cpo_songshi_124000.json' },
      { start: 125000, file: '../shicang_data/cpo_songshi_125000.json' },
      { start: 126000, file: '../shicang_data/cpo_songshi_126000.json' },
      { start: 127000, file: '../shicang_data/cpo_songshi_127000.json' },
      { start: 128000, file: '../shicang_data/cpo_songshi_128000.json' },
      { start: 129000, file: '../shicang_data/cpo_songshi_129000.json' },
      { start: 130000, file: '../shicang_data/cpo_songshi_130000.json' },
      { start: 131000, file: '../shicang_data/cpo_songshi_131000.json' },
      { start: 132000, file: '../shicang_data/cpo_songshi_132000.json' },
      { start: 133000, file: '../shicang_data/cpo_songshi_133000.json' },
      { start: 134000, file: '../shicang_data/cpo_songshi_134000.json' },
      { start: 135000, file: '../shicang_data/cpo_songshi_135000.json' },
      { start: 136000, file: '../shicang_data/cpo_songshi_136000.json' },
      { start: 137000, file: '../shicang_data/cpo_songshi_137000.json' },
      { start: 138000, file: '../shicang_data/cpo_songshi_138000.json' },
      { start: 139000, file: '../shicang_data/cpo_songshi_139000.json' },
      { start: 140000, file: '../shicang_data/cpo_songshi_140000.json' },
      { start: 141000, file: '../shicang_data/cpo_songshi_141000.json' },
      { start: 142000, file: '../shicang_data/cpo_songshi_142000.json' },
      { start: 143000, file: '../shicang_data/cpo_songshi_143000.json' },
      { start: 144000, file: '../shicang_data/cpo_songshi_144000.json' },
      { start: 145000, file: '../shicang_data/cpo_songshi_145000.json' },
      { start: 146000, file: '../shicang_data/cpo_songshi_146000.json' },
      { start: 147000, file: '../shicang_data/cpo_songshi_147000.json' },
      { start: 148000, file: '../shicang_data/cpo_songshi_148000.json' },
      { start: 149000, file: '../shicang_data/cpo_songshi_149000.json' },
      { start: 150000, file: '../shicang_data/cpo_songshi_150000.json' },
      { start: 151000, file: '../shicang_data/cpo_songshi_151000.json' },
      { start: 152000, file: '../shicang_data/cpo_songshi_152000.json' },
      { start: 153000, file: '../shicang_data/cpo_songshi_153000.json' },
      { start: 154000, file: '../shicang_data/cpo_songshi_154000.json' },
      { start: 155000, file: '../shicang_data/cpo_songshi_155000.json' },
      { start: 156000, file: '../shicang_data/cpo_songshi_156000.json' },
      { start: 157000, file: '../shicang_data/cpo_songshi_157000.json' },
      { start: 158000, file: '../shicang_data/cpo_songshi_158000.json' },
      { start: 159000, file: '../shicang_data/cpo_songshi_159000.json' },
      { start: 160000, file: '../shicang_data/cpo_songshi_160000.json' },
      { start: 161000, file: '../shicang_data/cpo_songshi_161000.json' },
      { start: 162000, file: '../shicang_data/cpo_songshi_162000.json' },
      { start: 163000, file: '../shicang_data/cpo_songshi_163000.json' },
      { start: 164000, file: '../shicang_data/cpo_songshi_164000.json' },
      { start: 165000, file: '../shicang_data/cpo_songshi_165000.json' },
      { start: 166000, file: '../shicang_data/cpo_songshi_166000.json' },
      { start: 167000, file: '../shicang_data/cpo_songshi_167000.json' },
      { start: 168000, file: '../shicang_data/cpo_songshi_168000.json' },
      { start: 169000, file: '../shicang_data/cpo_songshi_169000.json' },
      { start: 170000, file: '../shicang_data/cpo_songshi_170000.json' },
      { start: 171000, file: '../shicang_data/cpo_songshi_171000.json' },
      { start: 172000, file: '../shicang_data/cpo_songshi_172000.json' },
      { start: 173000, file: '../shicang_data/cpo_songshi_173000.json' },
      { start: 174000, file: '../shicang_data/cpo_songshi_174000.json' },
      { start: 175000, file: '../shicang_data/cpo_songshi_175000.json' },
      { start: 176000, file: '../shicang_data/cpo_songshi_176000.json' },
      { start: 177000, file: '../shicang_data/cpo_songshi_177000.json' },
      { start: 178000, file: '../shicang_data/cpo_songshi_178000.json' },
      { start: 179000, file: '../shicang_data/cpo_songshi_179000.json' },
      { start: 180000, file: '../shicang_data/cpo_songshi_180000.json' },
      { start: 181000, file: '../shicang_data/cpo_songshi_181000.json' },
      { start: 182000, file: '../shicang_data/cpo_songshi_182000.json' },
      { start: 183000, file: '../shicang_data/cpo_songshi_183000.json' },
      { start: 184000, file: '../shicang_data/cpo_songshi_184000.json' },
      { start: 185000, file: '../shicang_data/cpo_songshi_185000.json' },
      { start: 186000, file: '../shicang_data/cpo_songshi_186000.json' },
      { start: 187000, file: '../shicang_data/cpo_songshi_187000.json' },
      { start: 188000, file: '../shicang_data/cpo_songshi_188000.json' },
      { start: 189000, file: '../shicang_data/cpo_songshi_189000.json' },
      { start: 190000, file: '../shicang_data/cpo_songshi_190000.json' },
      { start: 191000, file: '../shicang_data/cpo_songshi_191000.json' },
      { start: 192000, file: '../shicang_data/cpo_songshi_192000.json' },
      { start: 193000, file: '../shicang_data/cpo_songshi_193000.json' },
      { start: 194000, file: '../shicang_data/cpo_songshi_194000.json' },
      { start: 195000, file: '../shicang_data/cpo_songshi_195000.json' },
      { start: 196000, file: '../shicang_data/cpo_songshi_196000.json' },
      { start: 197000, file: '../shicang_data/cpo_songshi_197000.json' },
      { start: 198000, file: '../shicang_data/cpo_songshi_198000.json' },
      { start: 199000, file: '../shicang_data/cpo_songshi_199000.json' },
      { start: 200000, file: '../shicang_data/cpo_songshi_200000.json' },
      { start: 201000, file: '../shicang_data/cpo_songshi_201000.json' },
      { start: 202000, file: '../shicang_data/cpo_songshi_202000.json' },
      { start: 203000, file: '../shicang_data/cpo_songshi_203000.json' },
      { start: 204000, file: '../shicang_data/cpo_songshi_204000.json' },
      { start: 205000, file: '../shicang_data/cpo_songshi_205000.json' },
      { start: 206000, file: '../shicang_data/cpo_songshi_206000.json' },
      { start: 207000, file: '../shicang_data/cpo_songshi_207000.json' },
      { start: 208000, file: '../shicang_data/cpo_songshi_208000.json' },
      { start: 209000, file: '../shicang_data/cpo_songshi_209000.json' },
      { start: 210000, file: '../shicang_data/cpo_songshi_210000.json' },
      { start: 211000, file: '../shicang_data/cpo_songshi_211000.json' },
      { start: 212000, file: '../shicang_data/cpo_songshi_212000.json' },
      { start: 213000, file: '../shicang_data/cpo_songshi_213000.json' },
      { start: 214000, file: '../shicang_data/cpo_songshi_214000.json' },
      { start: 215000, file: '../shicang_data/cpo_songshi_215000.json' },
      { start: 216000, file: '../shicang_data/cpo_songshi_216000.json' },
      { start: 217000, file: '../shicang_data/cpo_songshi_217000.json' },
      { start: 218000, file: '../shicang_data/cpo_songshi_218000.json' },
      { start: 219000, file: '../shicang_data/cpo_songshi_219000.json' },
      { start: 220000, file: '../shicang_data/cpo_songshi_220000.json' },
      { start: 221000, file: '../shicang_data/cpo_songshi_221000.json' },
      { start: 222000, file: '../shicang_data/cpo_songshi_222000.json' },
      { start: 223000, file: '../shicang_data/cpo_songshi_223000.json' },
      { start: 224000, file: '../shicang_data/cpo_songshi_224000.json' },
      { start: 225000, file: '../shicang_data/cpo_songshi_225000.json' },
      { start: 226000, file: '../shicang_data/cpo_songshi_226000.json' },
      { start: 227000, file: '../shicang_data/cpo_songshi_227000.json' },
      { start: 228000, file: '../shicang_data/cpo_songshi_228000.json' },
      { start: 229000, file: '../shicang_data/cpo_songshi_229000.json' },
      { start: 230000, file: '../shicang_data/cpo_songshi_230000.json' },
      { start: 231000, file: '../shicang_data/cpo_songshi_231000.json' },
      { start: 232000, file: '../shicang_data/cpo_songshi_232000.json' },
      { start: 233000, file: '../shicang_data/cpo_songshi_233000.json' },
      { start: 234000, file: '../shicang_data/cpo_songshi_234000.json' },
      { start: 235000, file: '../shicang_data/cpo_songshi_235000.json' },
      { start: 236000, file: '../shicang_data/cpo_songshi_236000.json' },
      { start: 237000, file: '../shicang_data/cpo_songshi_237000.json' },
      { start: 238000, file: '../shicang_data/cpo_songshi_238000.json' },
      { start: 239000, file: '../shicang_data/cpo_songshi_239000.json' },
      { start: 240000, file: '../shicang_data/cpo_songshi_240000.json' },
      { start: 241000, file: '../shicang_data/cpo_songshi_241000.json' },
      { start: 242000, file: '../shicang_data/cpo_songshi_242000.json' },
      { start: 243000, file: '../shicang_data/cpo_songshi_243000.json' },
      { start: 244000, file: '../shicang_data/cpo_songshi_244000.json' },
      { start: 245000, file: '../shicang_data/cpo_songshi_245000.json' },
      { start: 246000, file: '../shicang_data/cpo_songshi_246000.json' },
      { start: 247000, file: '../shicang_data/cpo_songshi_247000.json' },
      { start: 248000, file: '../shicang_data/cpo_songshi_248000.json' },
      { start: 249000, file: '../shicang_data/cpo_songshi_249000.json' },
      { start: 250000, file: '../shicang_data/cpo_songshi_250000.json' },
      { start: 251000, file: '../shicang_data/cpo_songshi_251000.json' },
      { start: 252000, file: '../shicang_data/cpo_songshi_252000.json' },
      { start: 253000, file: '../shicang_data/cpo_songshi_253000.json' },
      { start: 254000, file: '../shicang_data/cpo_songshi_254000.json' },
    ],
    total: 254225,
    description: 'chinese-poetry开源数据集·全宋诗254225首' },

  // 全唐诗 (chinese-poetry)
  { id: 'cpo_tang', title: '全唐诗', author: '御定', dynasty: '唐', type: 'shi',
    volumes: [
      { start: 0, file: '../shicang_data/cpo_tang_0.json' },
      { start: 1000, file: '../shicang_data/cpo_tang_1000.json' },
      { start: 2000, file: '../shicang_data/cpo_tang_2000.json' },
      { start: 3000, file: '../shicang_data/cpo_tang_3000.json' },
      { start: 4000, file: '../shicang_data/cpo_tang_4000.json' },
      { start: 5000, file: '../shicang_data/cpo_tang_5000.json' },
      { start: 6000, file: '../shicang_data/cpo_tang_6000.json' },
      { start: 7000, file: '../shicang_data/cpo_tang_7000.json' },
      { start: 8000, file: '../shicang_data/cpo_tang_8000.json' },
      { start: 9000, file: '../shicang_data/cpo_tang_9000.json' },
      { start: 10000, file: '../shicang_data/cpo_tang_10000.json' },
      { start: 11000, file: '../shicang_data/cpo_tang_11000.json' },
      { start: 12000, file: '../shicang_data/cpo_tang_12000.json' },
      { start: 13000, file: '../shicang_data/cpo_tang_13000.json' },
      { start: 14000, file: '../shicang_data/cpo_tang_14000.json' },
      { start: 15000, file: '../shicang_data/cpo_tang_15000.json' },
      { start: 16000, file: '../shicang_data/cpo_tang_16000.json' },
      { start: 17000, file: '../shicang_data/cpo_tang_17000.json' },
      { start: 18000, file: '../shicang_data/cpo_tang_18000.json' },
      { start: 19000, file: '../shicang_data/cpo_tang_19000.json' },
      { start: 20000, file: '../shicang_data/cpo_tang_20000.json' },
      { start: 21000, file: '../shicang_data/cpo_tang_21000.json' },
      { start: 22000, file: '../shicang_data/cpo_tang_22000.json' },
      { start: 23000, file: '../shicang_data/cpo_tang_23000.json' },
      { start: 24000, file: '../shicang_data/cpo_tang_24000.json' },
      { start: 25000, file: '../shicang_data/cpo_tang_25000.json' },
      { start: 26000, file: '../shicang_data/cpo_tang_26000.json' },
      { start: 27000, file: '../shicang_data/cpo_tang_27000.json' },
      { start: 28000, file: '../shicang_data/cpo_tang_28000.json' },
      { start: 29000, file: '../shicang_data/cpo_tang_29000.json' },
      { start: 30000, file: '../shicang_data/cpo_tang_30000.json' },
      { start: 31000, file: '../shicang_data/cpo_tang_31000.json' },
      { start: 32000, file: '../shicang_data/cpo_tang_32000.json' },
      { start: 33000, file: '../shicang_data/cpo_tang_33000.json' },
      { start: 34000, file: '../shicang_data/cpo_tang_34000.json' },
      { start: 35000, file: '../shicang_data/cpo_tang_35000.json' },
      { start: 36000, file: '../shicang_data/cpo_tang_36000.json' },
      { start: 37000, file: '../shicang_data/cpo_tang_37000.json' },
      { start: 38000, file: '../shicang_data/cpo_tang_38000.json' },
      { start: 39000, file: '../shicang_data/cpo_tang_39000.json' },
      { start: 40000, file: '../shicang_data/cpo_tang_40000.json' },
      { start: 41000, file: '../shicang_data/cpo_tang_41000.json' },
      { start: 42000, file: '../shicang_data/cpo_tang_42000.json' },
      { start: 43000, file: '../shicang_data/cpo_tang_43000.json' },
      { start: 44000, file: '../shicang_data/cpo_tang_44000.json' },
      { start: 45000, file: '../shicang_data/cpo_tang_45000.json' },
      { start: 46000, file: '../shicang_data/cpo_tang_46000.json' },
      { start: 47000, file: '../shicang_data/cpo_tang_47000.json' },
      { start: 48000, file: '../shicang_data/cpo_tang_48000.json' },
      { start: 49000, file: '../shicang_data/cpo_tang_49000.json' },
      { start: 50000, file: '../shicang_data/cpo_tang_50000.json' },
      { start: 51000, file: '../shicang_data/cpo_tang_51000.json' },
      { start: 52000, file: '../shicang_data/cpo_tang_52000.json' },
      { start: 53000, file: '../shicang_data/cpo_tang_53000.json' },
      { start: 54000, file: '../shicang_data/cpo_tang_54000.json' },
      { start: 55000, file: '../shicang_data/cpo_tang_55000.json' },
      { start: 56000, file: '../shicang_data/cpo_tang_56000.json' },
      { start: 57000, file: '../shicang_data/cpo_tang_57000.json' },
    ],
    total: 57603,
    description: 'chinese-poetry开源数据集·全唐诗57603首' },

  // 全宋词 (chinese-poetry)
  { id: 'cpo_song', title: '全宋词', author: '唐圭璋辑', dynasty: '宋', type: 'ci',
    volumes: [
      { start: 0, file: '../shicang_data/cpo_song_0.json' },
      { start: 1000, file: '../shicang_data/cpo_song_1000.json' },
      { start: 2000, file: '../shicang_data/cpo_song_2000.json' },
      { start: 3000, file: '../shicang_data/cpo_song_3000.json' },
      { start: 4000, file: '../shicang_data/cpo_song_4000.json' },
      { start: 5000, file: '../shicang_data/cpo_song_5000.json' },
      { start: 6000, file: '../shicang_data/cpo_song_6000.json' },
      { start: 7000, file: '../shicang_data/cpo_song_7000.json' },
      { start: 8000, file: '../shicang_data/cpo_song_8000.json' },
      { start: 9000, file: '../shicang_data/cpo_song_9000.json' },
      { start: 10000, file: '../shicang_data/cpo_song_10000.json' },
      { start: 11000, file: '../shicang_data/cpo_song_11000.json' },
      { start: 12000, file: '../shicang_data/cpo_song_12000.json' },
      { start: 13000, file: '../shicang_data/cpo_song_13000.json' },
      { start: 14000, file: '../shicang_data/cpo_song_14000.json' },
      { start: 15000, file: '../shicang_data/cpo_song_15000.json' },
      { start: 16000, file: '../shicang_data/cpo_song_16000.json' },
      { start: 17000, file: '../shicang_data/cpo_song_17000.json' },
      { start: 18000, file: '../shicang_data/cpo_song_18000.json' },
      { start: 19000, file: '../shicang_data/cpo_song_19000.json' },
      { start: 20000, file: '../shicang_data/cpo_song_20000.json' },
      { start: 21000, file: '../shicang_data/cpo_song_21000.json' },
    ],
    total: 21050,
    description: 'chinese-poetry开源数据集·全宋词21050首' },

  // 花间集 (chinese-poetry)
  { id: 'cpo_huajianji', title: '花间集', author: '赵崇祚编', dynasty: '五代', type: 'ci',
    volumes: [
      { start: 0, file: '../shicang_data/cpo_huajianji.json' },
    ], total: 499,
    description: 'chinese-poetry开源数据集·花间集五百首' },

// ==== 诗集：四库本 ====
  { id: '御定全唐诗', title: '御定全唐诗', author: '御定', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_御定全唐诗.json', total: 5207, dynasty: '唐' },
  { id: '李太白集注', title: '李太白集注', author: '李白', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_李太白集注.json', total: 1010, dynasty: '唐' },
  { id: '杜诗详注', title: '杜诗详注', author: '杜甫', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_杜诗详注.json', total: 1456, dynasty: '唐' },
  { id: '王右丞集笺注', title: '王右丞集笺注', author: '王维', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_王右丞集笺注.json', total: 479, dynasty: '唐' },
  { id: '孟浩然集', title: '孟浩然集', author: '孟浩然', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_孟浩然集.json', total: 267, dynasty: '唐' },
  { id: '高常侍集', title: '高常侍集', author: '高适', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_高常侍集.json', total: 244, dynasty: '唐' },
  { id: '岑嘉州集', title: '岑嘉州集', author: '岑参', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_岑嘉州集.json', total: 403, dynasty: '唐' },
  { id: '白氏长庆集', title: '白氏长庆集', author: '白居易', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_白氏长庆集.json', total: 2830, dynasty: '唐' },
  { id: '元氏长庆集', title: '元氏长庆集', author: '元稹', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_元氏长庆集.json', total: 833, dynasty: '唐' },
  { id: '刘梦得文集', title: '刘梦得文集', author: '刘禹锡', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_刘梦得文集.json', total: 767, dynasty: '唐' },
  { id: '韩昌黎集', title: '韩昌黎集', author: '韩愈', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_韩昌黎集.json', total: 414, dynasty: '唐' },
  { id: '柳河东集', title: '柳河东集', author: '柳宗元', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_柳河东集.json', total: 578, dynasty: '唐' },
  { id: '李长吉歌诗', title: '李长吉歌诗', author: '李贺', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_李长吉歌诗.json', total: 244, dynasty: '唐' },
  { id: '李义山诗集', title: '李义山诗集', author: '李商隐', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_李义山诗集.json', total: 594, dynasty: '唐' },
  { id: '樊川文集', title: '樊川文集', author: '杜牧', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_樊川文集.json', total: 517, dynasty: '唐' },
  { id: '玉溪生诗意', title: '玉溪生诗意', author: '李商隐', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_玉溪生诗意.json', total: 604, dynasty: '唐' },
  { id: '温飞卿诗集', title: '温飞卿诗集', author: '温庭筠', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_温飞卿诗集.json', total: 335, dynasty: '唐' },
  { id: '东坡全集', title: '东坡全集', author: '苏轼', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_东坡全集.json', total: 2786, dynasty: '宋' },
  { id: '栾城集', title: '栾城集', author: '苏辙', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_栾城集.json', total: 2516, dynasty: '宋' },
  { id: '山谷集', title: '山谷集', author: '黄庭坚', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_山谷集.json', total: 1886, dynasty: '宋' },
  { id: '剑南诗稿', title: '剑南诗稿', author: '陆游', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_剑南诗稿.json', total: 9221, dynasty: '宋' },
  { id: '稼轩集钞存', title: '稼轩集钞存', author: '辛弃疾', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_稼轩集钞存.json', total: 731, dynasty: '宋' },
  { id: '临川文集', title: '临川文集', author: '王安石', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_临川文集.json', total: 1729, dynasty: '宋' },
  { id: '欧阳文忠集', title: '欧阳文忠集', author: '欧阳修', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_欧阳文忠集.json', total: 1179, dynasty: '宋' },
  { id: '宛陵集', title: '宛陵集', author: '梅尧臣', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_宛陵集.json', total: 2567, dynasty: '宋' },
  { id: '石湖居士诗集', title: '石湖居士诗集', author: '范成大', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_石湖居士诗集.json', total: 1932, dynasty: '宋' },
  { id: '诚斋集', title: '诚斋集', author: '杨万里', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_诚斋集.json', total: 4239, dynasty: '宋' },
  { id: '遗山集', title: '遗山集', author: '元好问', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_遗山集.json', total: 1361, dynasty: '金元' },
  { id: '元遗山诗集笺注', title: '元遗山诗集笺注', author: '元好问', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_元遗山诗集笺注.json', total: 1335, dynasty: '金元' },
  { id: '道园学古录', title: '道园学古录', author: '虞集', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_道园学古录.json', total: 949, dynasty: '金元' },
  { id: '雁门集', title: '雁门集', author: '萨都剌', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_雁门集.json', total: 1052, dynasty: '金元' },
  { id: '铁崖古乐府', title: '铁崖古乐府', author: '杨维桢', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_铁崖古乐府.json', total: 570, dynasty: '金元' },
  { id: '高青丘集', title: '高青丘集', author: '高启', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_高青丘集.json', total: 2080, dynasty: '明' },
  { id: '李梦阳集', title: '李梦阳集', author: '李梦阳', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_李梦阳集.json', total: 2163, dynasty: '明' },
  { id: '弇州山人四部稿', title: '弇州山人四部稿', author: '王世贞', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_弇州山人四部稿.json', total: 4944, dynasty: '明' },
  { id: '袁中郎全集', title: '袁中郎全集', author: '袁宏道', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_袁中郎全集.json', total: 361, dynasty: '明' },
  { id: '渔洋山人精华录', title: '渔洋山人精华录', author: '王士祯', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_渔洋山人精华录.json', total: 1693, dynasty: '清' },
  { id: '敬业堂诗集', title: '敬业堂诗集', author: '查慎行', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_敬业堂诗集.json', total: 4540, dynasty: '清' },
  { id: '小仓山房诗文集', title: '小仓山房诗文集', author: '袁枚', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_小仓山房诗文集.json', total: 2656, dynasty: '清' },
  { id: '人境庐诗草', title: '人境庐诗草', author: '黄遵宪', type: 'shi', file: '../shicang_data/jingdu_lib/shiji_人境庐诗草.json', total: 643, dynasty: '清' },

  // ==== 词集：四库本 ====
  { id: '东坡词', title: '东坡词', author: '苏轼', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_东坡词.json', total: 346, dynasty: '宋' },
  { id: '淮海居士长短句', title: '淮海居士长短句', author: '秦观', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_淮海居士长短句.json', total: 87, dynasty: '宋' },
  { id: '小山词', title: '小山词', author: '晏几道', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_小山词.json', total: 260, dynasty: '宋' },
  { id: '珠玉词', title: '珠玉词', author: '晏殊', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_珠玉词.json', total: 139, dynasty: '宋' },
  { id: '乐章集', title: '乐章集', author: '柳永', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_乐章集.json', total: 212, dynasty: '宋' },
  { id: '六一词', title: '六一词', author: '欧阳修', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_六一词.json', total: 169, dynasty: '宋' },
  { id: '片玉集', title: '片玉集', author: '周邦彦', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_片玉集.json', total: 127, dynasty: '宋' },
  { id: '漱玉词', title: '漱玉词', author: '李清照', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_漱玉词.json', total: 52, dynasty: '宋' },
  { id: '稼轩词', title: '稼轩词', author: '辛弃疾', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_稼轩词.json', total: 629, dynasty: '宋' },
  { id: '白石道人歌曲', title: '白石道人歌曲', author: '姜夔', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_白石道人歌曲.json', total: 84, dynasty: '宋' },
  { id: '梦窗词稿', title: '梦窗词稿', author: '吴文英', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_梦窗词稿.json', total: 255, dynasty: '宋' },
  { id: '梅溪词', title: '梅溪词', author: '史达祖', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_梅溪词.json', total: 112, dynasty: '宋' },
  { id: '竹山词', title: '竹山词', author: '蒋捷', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_竹山词.json', total: 94, dynasty: '宋' },
  { id: '须溪词', title: '须溪词', author: '刘辰翁', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_须溪词.json', total: 352, dynasty: '宋' },
  { id: '山中白云词', title: '山中白云词', author: '张炎', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_山中白云词.json', total: 302, dynasty: '宋' },
  { id: '遗山乐府', title: '遗山乐府', author: '元好问', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_遗山乐府.json', total: 219, dynasty: '金元' },
  { id: '纳兰词', title: '纳兰词', author: '纳兰性德', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_纳兰词.json', total: 342, dynasty: '清' },
  { id: '饮水词', title: '饮水词', author: '纳兰性德', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_饮水词.json', total: 298, dynasty: '清' },
  { id: '弹指词', title: '弹指词', author: '顾贞观', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_弹指词.json', total: 243, dynasty: '清' },
  { id: '近三百年名家词选', title: '近三百年名家词选', author: '龙榆生编', type: 'ci', file: '../shicang_data/jingdu_lib/ciji_近三百年名家词选.json', total: 261, dynasty: '近现' },
];

// 异步加载数据
let allPoems = [];
let currentBook = null;
let loadingProgress = 0;

async function loadBook(bookId) {
  const book = POEM_BOOKS.find(b => b.id === bookId);
  if (!book) return;
  
  currentBook = book;
  allPoems = [];
  showLoading(`展卷中… ${book.title}`);
  
  if (book.volumes) {
    // 多分卷加载
    const total = book.volumes.length;
    for (let i = 0; i < total; i++) {
      const vol = book.volumes[i];
      try {
        const resp = await fetch(vol.file);
        const data = await resp.json();
        allPoems = allPoems.concat(data);
        updateLoading(`${book.title}：${i+1}/${total}卷（已载${allPoems.length}首）`);
      } catch(e) {
        console.error('加载分卷失败:', vol.file, e);
      }
    }
  } else if (book.file) {
    const resp = await fetch(book.file);
    allPoems = await resp.json();
  }
  
  hideLoading();
  renderBookList();
  renderPoemList();
  updateStats();
}

function renderBookList() {
  const list = document.getElementById('bookList');
  const groups = {
    '诗集': POEM_BOOKS.filter(b => b.type === 'shi'),
    '词集': POEM_BOOKS.filter(b => b.type === 'ci')
  };
  let html = '';
  for (const [group, books] of Object.entries(groups)) {
    html += `<div class="book-group"><div class="group-title">${group}</div>`;
    for (const b of books) {
      const active = currentBook && currentBook.id === b.id ? 'active' : '';
      const count = b.total ? b.total.toLocaleString() : '';
      html += `<div class="book-item ${active}" data-id="${b.id}">
        <span class="book-name">${b.title}</span>
        <span class="book-count">${count}</span>
      </div>`;
    }
    html += '</div>';
  }
  list.innerHTML = html;
  list.querySelectorAll('.book-item').forEach(item => {
    item.addEventListener('click', () => loadBook(item.dataset.id));
  });
}

function renderPoemList(filter = '') {
  const list = document.getElementById('poemList');
  if (!allPoems.length) {
    list.innerHTML = '<div class="empty">请从左侧选择典籍</div>';
    return;
  }
  let poems = allPoems;
  if (filter) {
    const kw = filter.toLowerCase();
    poems = allPoems.filter(p => 
      (p.t && p.t.includes(filter)) || 
      (p.a && p.a.includes(filter)) ||
      (p.l && p.l.some(l => l.includes(filter)))
    );
  }
  if (!poems.length) {
    list.innerHTML = '<div class="empty">无匹配诗词</div>';
    return;
  }
  let html = '';
  for (let i = 0; i < Math.min(poems.length, 200); i++) {
    const p = poems[i];
    const preview = p.l ? p.l.slice(0, 2).join('，') : '';
    html += `<div class="poem-item" data-idx="${i}">
      <div class="poem-title">${p.t || '无题'}</div>
      <div class="poem-author">${p.a || '佚名'}</div>
      <div class="poem-preview">${preview}</div>
    </div>`;
  }
  if (poems.length > 200) {
    html += `<div class="more">共 ${poems.length.toLocaleString()} 首，仅展示前200，请搜索筛选</div>`;
  }
  list.innerHTML = html;
  list.querySelectorAll('.poem-item').forEach(item => {
    item.addEventListener('click', () => showPoem(poems[parseInt(item.dataset.idx)]));
  });
}

function showPoem(p) {
  const view = document.getElementById('poemView');
  if (!p) {
    view.innerHTML = '<div class="empty-tip">请从上方选择诗词</div>';
    return;
  }
  // 生成平仄标注
  const linesHtml = (p.l || []).map(line => {
    return `<div class="poem-line">${line}</div>`;
  }).join('');
  view.innerHTML = `
    <div class="poem-detail">
      <h2 class="detail-title">${p.t || '无题'}</h2>
      <div class="detail-author">${p.a || '佚名'}${p.g ? ' · ' + p.g : ''}</div>
      <div class="detail-content">${linesHtml}</div>
    </div>
  `;
}

function updateStats() {
  if (currentBook) {
    document.getElementById('stats').textContent = 
      `${currentBook.title} · ${allPoems.length.toLocaleString()}首`;
  }
}

function showLoading(text) {
  document.getElementById('loading').textContent = text;
  document.getElementById('loading').style.display = 'block';
}
function updateLoading(text) {
  document.getElementById('loading').textContent = text;
}
function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  renderBookList();
  renderPoemList();
  // 默认加载全唐诗
  loadBook('cpo_tang');
  // 搜索
  document.getElementById('searchBtn').addEventListener('click', () => {
    renderPoemList(document.getElementById('searchInput').value.trim());
  });
  document.getElementById('searchInput').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') renderPoemList(e.target.value.trim());
  });
});
