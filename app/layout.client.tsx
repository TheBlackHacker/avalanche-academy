'use client';
import { useParams } from 'next/navigation';
import type { ReactNode } from 'react';
import { modes } from '@/utils/modes';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { ChevronDownIcon, DocumentTextIcon, UserGroupIcon } from '@heroicons/react/20/solid';
import COURSES from '@/content/courses';


export function Title(): React.ReactElement {

  const svgCode = '<svg width="1503" height="1504" viewBox="0 0 1503 1504" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 0 C2.55732537 0.00564458 5.11464409 0.00846231 7.67197418 0.0110817 C31.3592901 0.04635241 54.92104633 0.28871882 78.47373199 3.06482315 C80.7705047 3.33292967 83.06858053 3.58655283 85.36722565 3.83807755 C109.66314072 6.5211589 133.6968403 10.42576206 157.64310455 15.31805801 C158.37490936 15.46738785 159.10671417 15.61671768 159.86069489 15.77057266 C218.98163151 27.9141184 276.38459945 47.96549604 330.64310455 74.31805801 C331.81163971 74.88379532 332.98017487 75.44953262 334.18412018 76.03241348 C350.34077955 83.87648725 366.16576987 92.20338682 381.64310455 101.31805801 C382.57928619 101.86929337 383.51546783 102.42052872 384.48001862 102.98846817 C419.01024535 123.43880915 451.78167702 146.67417983 482.64310455 172.31805801 C483.51636383 173.04267227 483.51636383 173.04267227 484.40726471 173.7819252 C491.05401877 179.31241611 497.55453841 184.9708905 503.9126358 190.83368301 C506.07588096 192.80195757 508.26003215 194.73209803 510.4673233 196.65008926 C520.76353245 205.63556429 530.58846549 215.17615857 540.26810455 224.81805801 C540.90619049 225.45155167 541.54427643 226.08504532 542.2016983 226.73773575 C545.93239064 230.4807001 549.46089235 234.34619793 552.91507721 238.34491348 C555.69678407 241.52119985 558.61417067 244.56647173 561.51810455 247.63055801 C566.35163922 252.77040759 570.96873402 258.00101235 575.3735733 263.51727676 C577.54278581 266.19425674 579.77159736 268.80328033 582.02933502 271.40521622 C587.71712009 277.96040194 593.13468835 284.65803968 598.34818268 291.59784317 C599.70458566 293.39973145 601.07172479 295.19312503 602.43997955 296.98602676 C620.72843957 321.04142134 637.37835779 346.24599566 652.64310455 372.31805801 C653.3391983 373.49392471 653.3391983 373.49392471 654.04935455 374.6935463 C694.16011587 442.53365685 721.67382109 516.89619057 753.64310455 704.31805801 C753.70505508 705.38395157 753.70505508 705.38395157 753.76825714 706.47137833 C754.60910919 721.13103218 754.84518159 735.76101499 754.83060455 750.44305801 C754.83000031 751.57801712 754.82939606 752.71297623 754.8287735 753.88232803 C754.80070878 773.42461409 754.31192905 792.84529499 752.64310455 812.31805801 C752.57994049 813.05852371 752.51677643 813.79898941 752.4516983 814.56189346 C745.36375757 896.48363489 725.924643 978.10392554 684.17240143 1070.14764786 C682.63026007 1073.34468611 681.12486713 1076.55687428 679.62747955 1079.77508926 C673.38510235 1093.11885836 666.51855489 1105.96211078 659.13773346 1118.70770645 C657.34049597 1121.8465603 655.61350385 1125.01993289 653.89090729 1128.20013809 C627.39808864 1176.93491942 592.02614237 1222.19908964 554.20413971 1262.64374161 C552.57651377 1264.38948116 550.95878421 1266.14400991 549.3423233 1267.90008926 C543.10355175 1274.65972301 536.76021547 1281.30086048 530.26810455 1287.81805801 C529.62647369 1288.46428116 528.98484283 1289.1105043 528.32376862 1289.77630997 C524.55590553 1293.53201552 520.66891858 1297.08651347 516.64310455 1300.5631752 C513.28296844 1303.51149776 510.06855382 1306.61203489 506.83060455 1309.69305801 C501.48947737 1314.7370097 496.07660821 1319.58238497 490.3266983 1324.16180801 C487.88203872 1326.12607597 485.4953918 1328.14567454 483.11917877 1330.19183731 C475.57189222 1336.67918929 467.7201772 1342.72658201 459.7720108 1348.71258926 C457.74488376 1350.24130342 455.72450018 1351.77849777 453.70560455 1353.31805801 C417.69931756 1380.68283613 378.93590702 1403.86809322 338.64310455 1424.31805801 C337.50244537 1424.89716934 336.36178619 1425.47628067 335.18656158 1426.07294083 C261.44954122 1463.32931488 180.64727685 1486.6449528 87.64310455 1498.56805801 C86.35960114 1498.71920059 85.07609772 1498.87034317 83.75370026 1499.02606583 C79.38693792 1499.5076081 75.01910823 1499.93072472 70.64310455 1500.31805801 C69.17692688 1500.44886261 69.17692688 1500.44886261 67.68112946 1500.58230972 C47.2058317 1502.34569631 26.8242881 1502.6821709 6.28620911 1502.63611603 C3.72888374 1502.63047144 1.17156501 1502.62765372 -1.38576508 1502.62503433 C-25.073081 1502.58976362 -48.63483722 1502.3473972 -72.18752289 1499.57129288 C-74.4842956 1499.30318636 -76.78237143 1499.0495632 -79.08101654 1498.79803848 C-103.37693161 1496.11495713 -127.41063119 1492.21035396 -151.35689545 1487.31805801 C-152.08870026 1487.16872818 -152.82050507 1487.01939835 -153.57448578 1486.86554337 C-212.6954224 1474.72199763 -270.09839035 1454.67061999 -324.35689545 1428.31805801 C-325.5254306 1427.75232071 -326.69396576 1427.1865834 -327.89791107 1426.60370255 C-344.05457044 1418.75962878 -359.87956076 1410.43272921 -375.35689545 1401.31805801 C-376.29307709 1400.76682266 -377.22925873 1400.21558731 -378.19380951 1399.64764786 C-412.72403625 1379.19730688 -445.49546792 1355.96193619 -476.35689545 1330.31805801 C-476.9390683 1329.83498184 -477.52124115 1329.35190567 -478.1210556 1328.85419083 C-484.76780966 1323.32369991 -491.2683293 1317.66522553 -497.6264267 1311.80243301 C-499.78967185 1309.83415845 -501.97382304 1307.90401799 -504.1811142 1305.98602676 C-514.47732335 1297.00055174 -524.30225638 1287.45995746 -533.98189545 1277.81805801 C-534.93902435 1276.86781754 -534.93902435 1276.86781754 -535.9154892 1275.89838028 C-539.64618153 1272.15541593 -543.17468324 1268.28991809 -546.6288681 1264.29120255 C-549.41057497 1261.11491618 -552.32796156 1258.0696443 -555.23189545 1255.00555801 C-560.06543012 1249.86570843 -564.68252491 1244.63510368 -569.0873642 1239.11883926 C-571.2565767 1236.44185929 -573.48538825 1233.8328357 -575.74312592 1231.23089981 C-581.43091098 1224.67571409 -586.84847924 1217.97807634 -592.06197357 1211.03827286 C-593.41837656 1209.23638458 -594.78551568 1207.442991 -596.15377045 1205.65008926 C-614.44223047 1181.59469469 -631.09214868 1156.39012037 -646.35689545 1130.31805801 C-646.82095795 1129.53414688 -647.28502045 1128.75023575 -647.76314545 1127.94256973 C-687.87390677 1060.10245918 -715.38761199 985.73992546 -747.35689545 798.31805801 C-747.41884598 797.25216446 -747.41884598 797.25216446 -747.48204803 796.1647377 C-748.32290009 781.50508385 -748.55897248 766.87510104 -748.54439545 752.19305801 C-748.54348907 750.49061935 -748.54348907 750.49061935 -748.54256439 748.75378799 C-748.51449967 729.21150194 -748.02571995 709.79082104 -746.35689545 690.31805801 C-746.29373138 689.57759232 -746.23056732 688.83712662 -746.1654892 688.07422256 C-739.07754847 606.15248114 -719.63843389 524.53219049 -677.88619232 432.48846817 C-676.34405097 429.29142991 -674.83865803 426.07924174 -673.34127045 422.86102676 C-667.09889324 409.51725766 -660.23234579 396.67400525 -652.85152435 383.92840958 C-651.05428686 380.78955572 -649.32729474 377.61618313 -647.60469818 374.43597794 C-621.11086553 325.69933131 -585.73738598 280.43376548 -547.91353607 239.98797989 C-546.2987711 238.25570379 -544.69432782 236.51429499 -543.09127045 234.77118301 C-536.68354988 227.82356377 -530.15315301 221.01344706 -523.48189545 214.31805801 C-522.79264984 213.62422012 -522.10340424 212.93038223 -521.3932724 212.21551895 C-517.49039821 208.32438767 -513.48064546 204.62362414 -509.30806732 201.0241127 C-506.13737216 198.2517381 -503.10096114 195.33984314 -500.04439545 192.44305801 C-494.87759924 187.58452638 -489.62073164 182.93737868 -484.07564545 178.50946426 C-481.62055317 176.53057523 -479.22028094 174.49932881 -476.8307724 172.44208145 C-469.2835364 165.95622954 -461.43318029 159.9089407 -453.4858017 153.92352676 C-451.45867465 152.39481261 -449.43829108 150.85761826 -447.41939545 149.31805801 C-411.41310846 121.9532799 -372.64969791 98.7680228 -332.35689545 78.31805801 C-331.21623627 77.73894669 -330.07557709 77.15983536 -328.90035248 76.5631752 C-255.16333211 39.30680115 -174.36106775 15.99116322 -81.35689545 4.06805801 C-79.43164032 3.84134415 -79.43164032 3.84134415 -77.46749115 3.6100502 C-73.10072881 3.12850792 -68.73289912 2.70539131 -64.35689545 2.31805801 C-63.37944366 2.23085495 -62.40199188 2.14365189 -61.39492035 2.0538063 C-40.9196226 0.29041972 -20.53807899 -0.04605487 0 0 Z " fill="#E84142" transform="translate(748.3568954467773,0.6819419860839844)"/><path d="M0 0 C9.57967371 7.65251279 16.09243516 19.06001585 22 29.59765625 C22.97076777 31.30442209 23.94154282 33.01118381 24.91267395 34.71774292 C25.91888594 36.48895936 26.92132549 38.26226312 27.92285156 40.03613281 C30.8854856 45.27997714 33.88443718 50.50299939 36.87744141 55.72955322 C38.55347139 58.65819617 40.22601848 61.58882517 41.8984375 64.51953125 C42.23139832 65.10296295 42.56435913 65.68639465 42.90740967 66.2875061 C44.25432083 68.64775599 45.60109509 71.00808398 46.94787598 73.3684082 C49.29791657 77.4868721 51.6485209 81.6050135 54 85.72265625 C54.33152069 86.30319763 54.66304138 86.88373901 55.00460815 87.48187256 C59.79376544 95.86643156 64.6070903 104.23679468 69.4375 112.59765625 C76.29116175 124.46052518 83.09519017 136.35133428 89.88464355 148.25100708 C92.30303571 152.48874481 94.72669834 156.72344179 97.15234375 160.95703125 C111.28453595 185.6283462 111.28453595 185.6283462 117.85693359 197.63330078 C118.94185692 199.60557667 120.04247671 201.56850604 121.14453125 203.53125 C134.3278359 227.24675421 140.08023678 256.86051391 132.8984375 283.578125 C132.58132813 284.57457031 132.26421875 285.57101562 131.9375 286.59765625 C131.62039063 287.66628906 131.30328125 288.73492188 130.9765625 289.8359375 C124.77971652 308.88794269 113.86972281 326.32617576 103.9375 343.59765625 C101.95654421 347.05496678 99.97827372 350.51381054 98 353.97265625 C97.27127686 355.24484009 97.27127686 355.24484009 96.52783203 356.54272461 C92.01504971 364.43234355 87.58080922 372.3651695 83.14868164 380.30029297 C78.96972408 387.77467349 74.73737536 395.21659012 70.4765625 402.64453125 C66.58593006 409.437699 62.75490463 416.26311088 58.9375 423.09765625 C54.13863892 431.68826671 49.29649811 440.2519291 44.40405273 448.78955078 C39.08920272 458.06743601 33.83383643 467.37867998 28.57861328 476.69042969 C25.86700977 481.49402603 23.15209904 486.29575231 20.4375 491.09765625 C19.35415057 493.01431382 18.27081725 494.93098049 17.1875 496.84765625 C-5.5625 537.09765625 -5.5625 537.09765625 -28.3125 577.34765625 C-28.84883057 578.29656738 -29.38516113 579.24547852 -29.93774414 580.22314453 C-31.0201993 582.13821998 -32.10271875 584.05325909 -33.18530273 585.96826172 C-35.90760255 590.78397693 -38.62875348 595.60033468 -41.34765625 600.41796875 C-46.54075009 609.61698689 -51.74771144 618.80729072 -57 627.97265625 C-61.34177641 635.54927102 -65.62051312 643.15922277 -69.875 650.78515625 C-76.5540578 662.74401757 -83.35780845 674.62761627 -90.24414062 686.46826172 C-91.44103346 688.528113 -92.63512118 690.5895972 -93.82617188 692.65283203 C-100.39739411 704.03312978 -107.0395479 715.17356974 -115.0625 725.59765625 C-115.61679687 726.33628906 -116.17109375 727.07492187 -116.7421875 727.8359375 C-131.24199733 745.83445766 -155.75846169 757.96882462 -178.0625 761.59765625 C-178.94684754 761.75948993 -179.83119509 761.9213236 -180.74234104 762.08806133 C-191.79439704 763.92571679 -202.70915382 763.88719248 -213.88452148 763.87231445 C-216.0592669 763.87666942 -218.23401079 763.88185516 -220.40875244 763.88780212 C-226.27859555 763.90111756 -232.14837399 763.90177925 -238.01822925 763.89923882 C-242.93350233 763.89816424 -247.84876258 763.90306478 -252.7640329 763.90784425 C-264.36621737 763.91891319 -275.96836945 763.91939127 -287.57055664 763.91333008 C-299.50846674 763.9072891 -311.44625901 763.91961055 -323.38414901 763.94090015 C-333.66484303 763.95855489 -343.94549967 763.96451149 -354.22620827 763.9612624 C-360.35276217 763.95945592 -366.47923196 763.96202232 -372.60577202 763.97597694 C-378.36873325 763.98861419 -384.13151157 763.98655565 -389.89447021 763.97356606 C-391.99901964 763.97121371 -394.10358217 763.97388633 -396.20811653 763.98218918 C-430.15757588 764.10638341 -430.15757588 764.10638341 -442.30859375 752.44140625 C-448.49627886 745.44761904 -451.93084891 736.95398803 -452.5625 727.59765625 C-451.03997373 707.00125923 -435.81249137 686.88411582 -425.74316406 669.50439453 C-422.53912356 663.9629497 -419.36420035 658.40480138 -416.1875 652.84765625 C-415.84887939 652.25569458 -415.51025879 651.66373291 -415.16137695 651.05383301 C-409.74165486 641.57737482 -404.3891309 632.064786 -399.06640625 622.53344727 C-393.46768837 612.51489871 -387.77182157 602.55345485 -382.0625 592.59765625 C-379.43572086 588.01533979 -376.81041488 583.43218541 -374.1875 578.84765625 C-373.84869812 578.25551331 -373.50989624 577.66337036 -373.16082764 577.05328369 C-367.74345658 567.58069523 -362.39245313 558.07241756 -357.07299805 548.54443359 C-352.93321365 541.13502938 -348.74202558 533.75671211 -344.52148438 526.39306641 C-340.92770875 520.12057494 -337.3639296 513.83170979 -333.8125 507.53515625 C-329.28478377 499.50868801 -324.72497048 491.50110522 -320.14526367 483.50421143 C-314.65400157 473.91552696 -309.19990809 464.30775859 -303.8125 454.66015625 C-297.63463944 443.5973552 -291.36585281 432.58931443 -285.0625 421.59765625 C-282.43572086 417.01533979 -279.81041488 412.43218541 -277.1875 407.84765625 C-276.84869812 407.25551331 -276.50989624 406.66337036 -276.16082764 406.05328369 C-270.74133517 396.57698582 -265.38900692 387.06456399 -260.06640625 377.53344727 C-254.46768837 367.51489871 -248.77182157 357.55345485 -243.0625 347.59765625 C-240.43572086 343.01533979 -237.81041488 338.43218541 -235.1875 333.84765625 C-234.84869812 333.25551331 -234.50989624 332.66337036 -234.16082764 332.05328369 C-228.74345658 322.58069523 -223.39245313 313.07241756 -218.07299805 303.54443359 C-213.93321365 296.13502938 -209.74202558 288.75671211 -205.52148438 281.39306641 C-201.92770875 275.12057494 -198.3639296 268.83170979 -194.8125 262.53515625 C-190.28478377 254.50868801 -185.72497048 246.50110522 -181.14526367 238.50421143 C-175.65400157 228.91552696 -170.19990809 219.30775859 -164.8125 209.66015625 C-158.63463944 198.5973552 -152.36585281 187.58931443 -146.0625 176.59765625 C-143.43572086 172.01533979 -140.81041488 167.43218541 -138.1875 162.84765625 C-137.84869812 162.25551331 -137.50989624 161.66337036 -137.16082764 161.05328369 C-131.74133517 151.57698582 -126.38900692 142.06456399 -121.06640625 132.53344727 C-115.46768837 122.51489871 -109.77182157 112.55345485 -104.0625 102.59765625 C-101.4357208 98.01533968 -98.8105647 93.43209975 -96.1875 88.84765625 C-95.84803345 88.2545163 -95.50856689 87.66137634 -95.15881348 87.05026245 C-90.36847658 78.67683425 -85.63389529 70.27424408 -80.9375 61.84765625 C-46.67690615 0.4620628 -46.67690615 0.4620628 -31.26953125 -5.04296875 C-20.31867082 -6.8261177 -9.3223962 -6.33852317 0 0 Z " fill="#FEFEFE" transform="translate(773.0625,287.40234375)"/><path d="M0 0 C10.1444424 8.57903677 16.81475259 19.9618642 23.58203125 31.24609375 C24.32321606 32.47434874 25.06451063 33.70253749 25.8059082 34.93066406 C32.60475639 46.22129909 39.18222711 57.63773266 45.73291016 69.07373047 C48.59797705 74.06077913 51.49428767 79.02944211 54.39453125 83.99609375 C54.96067139 84.96579102 55.52681152 85.93548828 56.11010742 86.93457031 C61.46376222 96.09771483 66.83332607 105.25154169 72.20263672 114.40551758 C77.21855001 122.95801761 82.21870465 131.51958875 87.2109375 140.0859375 C91.80111111 147.95928769 96.40840309 155.82250712 101.01953125 163.68359375 C107.40216205 174.56524228 113.77016585 185.45527524 120.12109375 196.35546875 C122.42334249 200.30635609 124.73113742 204.2539313 127.04296875 208.19921875 C159.73982983 264.02839981 159.73982983 264.02839981 157.05859375 278.70703125 C154.19131834 289.4002819 148.89314961 297.24420371 139.51953125 303.18359375 C130.02899048 308.47639533 118.20887417 308.48379213 107.57913208 308.43756104 C106.45154759 308.44068102 105.32396311 308.443801 104.16220939 308.44701552 C100.42335167 308.45492597 96.68465941 308.44869912 92.94580078 308.44238281 C90.24903902 308.4450958 87.55228826 308.44858678 84.85552979 308.45300293 C78.31435279 308.46185729 71.7732219 308.45999249 65.23204316 308.45417765 C59.91068197 308.44964473 54.58933361 308.44905528 49.26797104 308.45122528 C48.1281098 308.45168498 48.1281098 308.45168498 46.96522107 308.45215397 C45.42103498 308.45279348 43.87684889 308.4534419 42.33266281 308.45409915 C27.88037539 308.45979105 13.42811342 308.45326288 -1.02416982 308.44249842 C-13.39714809 308.43356756 -25.77008881 308.43511332 -38.14306641 308.44433594 C-52.54363723 308.455065 -66.94418579 308.45923805 -81.34476006 308.45311141 C-82.88359904 308.45247438 -84.42243802 308.45184563 -85.96127701 308.45122528 C-86.71822592 308.45091673 -87.47517483 308.45060818 -88.25506159 308.45029028 C-93.56264374 308.44857096 -98.87021165 308.45146196 -104.1777916 308.45618439 C-110.65670636 308.46182277 -117.13557273 308.46021527 -123.61448203 308.4496229 C-126.91359616 308.4444051 -130.21261427 308.44333835 -133.51173019 308.4489212 C-173.42644255 308.51020937 -173.42644255 308.51020937 -185.16796875 298.24609375 C-192.59310903 290.07843944 -196.31528206 280.75390817 -196.01953125 269.73046875 C-194.73735881 261.29414576 -191.69973188 254.02511874 -187.66796875 246.55859375 C-186.95217651 245.21341675 -186.95217651 245.21341675 -186.22192383 243.84106445 C-180.83642466 233.82042666 -175.06683817 224.02357184 -169.27880859 214.23193359 C-166.32636433 209.22728804 -163.4047795 204.20471146 -160.48046875 199.18359375 C-159.31267209 197.18088922 -158.14470329 195.17828507 -156.9765625 193.17578125 C-156.1100708 191.69029785 -156.1100708 191.69029785 -155.22607422 190.17480469 C-153.49035285 187.20053081 -151.7531795 184.22710953 -150.015625 181.25390625 C-144.01269816 170.97826818 -138.03859087 160.68720812 -132.10546875 150.37109375 C-126.96384527 141.43489201 -121.75067413 132.54453762 -116.48046875 123.68359375 C-108.69199612 110.58621307 -101.06855836 97.39781826 -93.48046875 84.18359375 C-83.87367925 67.45391873 -74.18383229 50.78053992 -64.29052734 34.21875 C-62.63380902 31.44071895 -60.98791977 28.65656081 -59.34375 25.87109375 C-43.49211467 -0.80308423 -43.49211467 -0.80308423 -30.16796875 -4.44921875 C-19.93225133 -5.8477034 -8.61212062 -6.30651353 0 0 Z " fill="#FEFEFE" transform="translate(1030.48046875,742.81640625)"/></svg>'

  return (
    <>
      <img width="80" height="80" src={`data:image/svg+xml;utf8,${encodeURIComponent(svgCode)}`} className="size-5" alt="logo" />
      <span className="max-md:hidden [.uwu_&]:hidden">Academy</span>
    </>
  );
}

export function Body({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  const mode = useMode();

  return <div className={mode}>{children}</div>;
}

export function NavChildren(): React.ReactElement {

  const callsToAction = [
    { name: 'Documentation', href: 'https://docs.avax.network', icon: DocumentTextIcon },
    { name: 'Join our Community', href: 'https://t.me/avalancheacademy', icon: UserGroupIcon },
  ]

  return (
    <Popover className="md:relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6">
        <span>Explore Courses</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </PopoverButton>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-xs md:max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {COURSES.official_featured.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-4 md:h-12 w-4 md:w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={`/course/${item.slug}`} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600 hidden md:block">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 hidden md:block">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}

export function useMode(): string | undefined {
  const { slug } = useParams();
  return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
}

export function SidebarBanner(): React.ReactElement {
  const mode = useMode();
  const currentMode = modes.find((item) => item.param === mode) ?? modes[0];
  const Icon = currentMode.icon;

  return (
    <div className="-mt-2 flex flex-row items-center gap-2 rounded-lg p-2 text-card-foreground transition-colors hover:bg-muted/80">
      <Icon className="size-9 shrink-0 rounded-md bg-primary/30 bg-gradient-to-t from-background/80 p-1.5 text-primary shadow-md shadow-primary/50" />
      <div>
        <p className="font-medium">WHAT TO ADD</p>
        <p className="text-xs text-muted-foreground">
          CAN BE ANYTHING
        </p>
      </div>
    </div>
  );
}
