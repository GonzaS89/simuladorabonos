const codigo_06 = '$ 580'; 
const codigo_08 = '$ 670';
const codigo_10 = '$ 690';
const codigo_11 = '$ 750';
const codigo_12 = '$ 820';
const codigo_13 = '$ 890';
const codigo_14 = '$ 960';
const codigo_15 = '$ 1030';
const codigo_16 = '$ 1100'; 
const codigo_18 = '$ 1170';
const codigo_20 = '$ 1300';
const codigo_21 = '$ 1440'; 
const codigo_22 = '$ 1650';
const codigo_23 = '$ 1720';
const codigo_24 = '$ 1780';
const codigo_26 = '$ 2130';
const codigo_27 = '$ 2200';
const codigo_30 = '$ 2670';
const codigo_34 = '$ 3020';
const codigo_37 = '$ 3500';
const codigo_41 = '$ 3980';
const codigo_44 = '$ 4390';

const definirPrecioDeBoleto = ( inicio , final ) => {
  if(inicio === 'la florida') {
    if(final === 'la florida') {return codigo_06}
    if(final === 'alderetes'){return codigo_10};
    if(final === 'banda del río salí'){return codigo_12};
    if(final === 'terminal'){return codigo_16}
  }
  

}