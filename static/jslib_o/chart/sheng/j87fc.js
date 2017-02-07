var bubu ={ s64:"38948.08",s65:"93810.49",s11:"140273.72",s12:"82813.16",s13:"305773.5",s14:"134298.48",s15:"102424.49",s21:"238768.79",s22:"119509.2",s23:"162589.08",s31:"219244.06",s32:"598210.95",s33:"420960.52",s34:"254328.89",s35:"256262.77",s36:"201189.71",s37:"479100.25",s41:"403667.62",s42:"290200.42",s43:"304214.43",s44:"838550.53",s45:"245577.8",s46:"37103.42",s50:"132430.2",s51:"283657.06",s52:"91455.12",s53:"154009.74",s54:"4683.14",s61:"128749.05",s62:"62813.02",s63:"21994.46" };
var title = "2012年各地区废水排放总量";
var unit = "万吨";
function getColor(d) {
    return d > 500000 ? '#800026' :
           d > 310000  ? '#BD0026' :
           d > 260000  ? '#E31A1C' :
           d > 220000  ? '#FC4E2A' :
           d > 150000   ? '#FD8D3C' :
           d > 100000  ? '#FEB24C' :
           d > 40000   ? '#FED976' :
           d > 4600   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [4600, 40000, 100000, 150000, 220000, 260000, 310000, 500000];