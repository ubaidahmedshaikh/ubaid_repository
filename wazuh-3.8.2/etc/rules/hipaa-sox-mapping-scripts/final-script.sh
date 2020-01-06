#!/bin/bash

date

sed -i 's/\<pci_dss_2.2\>/sox_302.4.C,&/' 0385-oscap_rules.xml


FILES=`ls . | grep -E -v "*.sh" | grep -E -v "*.txt"` 
for file in $FILES
 do
 
 
 sed -i 's/\<pci_dss_10.6.1\>/hipaa_164.308(a)(1)(II)(D),&/' $file
 sed -i 's/\<pci_dss_10.2.1\>/hipaa_164.308(a)(3)(II)(A),&/' $file
 sed -i 's/\<pci_dss_10.1\>/hipaa_164.308(a)(3)(II)(C),&/' $file
 sed -i 's/\<pci_dss_10.8\>/hipaa_164.308(a)(4)(II)(B), hipaa_164.308(a)(4)(II)(C),&/' $file
 sed -i 's/\<pci_dss_10.2.5\>/hipaa_164.308(a)(4)(II)(C),&/' $file
 sed -i 's/\<pci_dss_11.4\>/hipaa_164.308(a)(5)(II)(B),&/' $file
 sed -i 's/\<pci_dss_10.2.4\>/hipaa_164.308(a)(5)(II)(C),&/' $file
 sed -i 's/\<pci_dss_8.2.4\>/hipaa_164.312(a)(5)(II)(D),&/' $file
 
 sed -i 's/\<pci_dss_8.1.1\>/hipaa_164.312(a)(2)(I),&/' $file
 sed -i 's/\<pci_dss_11.5\>/hipaa_164.312(c)(2),&/' $file


 sed -i 's/\<gdpr_IV_33\>/sox_302.4.D,&/' $file
 sed -i 's/\<pci_dss_10.2\>/sox_302.4.B,&/' $file
 
 done 

while IFS= read -r line
 do
   while IFS= read -r entry
    do
      first=`echo $entry | cut -f1 -d' '`
      second=`echo $entry | cut -f2 -d' '`
      third=`echo $entry | cut -f3 -d' '`
      output=`grep -Ern "$first" $line | grep -v "$second" | grep -v "third" | cut -f 1 -d':'`
      for a in $output;
        do
          sed -i "${a}s/\<${first}\>/${third},&/" $line
        done
    done < table.txt
 done < $1


 
date
