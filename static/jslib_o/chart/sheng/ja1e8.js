var bubu ={ s64:"37948",s65:"74700",s11:"113259",s12:"61229",s13:"234697",s14:"106911",s15:"70421",s21:"212021",s22:"107781",s23:"110996",s31:"223751",s32:"509701",s33:"350377",s34:"168670",s35:"236269",s36:"138909",s37:"358911",s41:"309193",s42:"258874",s43:"250331",s44:"677352",s45:"345355",s46:"36188",s50:"145113",s51:"262343",s52:"55866",s53:"83865",s54:"3420",s61:"104883",s62:"47470",s63:"19997" };
var title = "2008年各地区废水排放总量";
var unit = "万吨";
function getColor(d) {
    return d > 350000 ? '#800026' :
           d > 260000  ? '#BD0026' :
           d > 230000  ? '#E31A1C' :
           d > 140000  ? '#FC4E2A' :
           d > 110000   ? '#FD8D3C' :
           d > 74000  ? '#FEB24C' :
           d > 40000   ? '#FED976' :
           d > 3400   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [3400, 40000, 74000, 110000, 140000, 230000, 260000, 350000];