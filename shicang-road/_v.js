global.window = global;
require('./road_data.js');
require('./road_data_patch.js');
console.log('poets=', ROAD_DATA.poets.length);
const filled = ROAD_DATA.poets.filter(p=>p.route && p.route.length>0).length;
console.log('filled=', filled);
const empty = ROAD_DATA.poets.filter(p=>!p.route || !p.route.length);
if(empty.length) console.log('EMPTY:', empty.map(p=>p.name).join(','));
