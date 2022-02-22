function cons(v1,v2){
    return {vv1:v1,vv2:v2};}
const nil={};
function isEmpty(l){
    return l===nil;}
function head(l){
    return l["vv1"];}
function tail(l){
    return l["vv2"];}
let list_l1=cons(1,cons(2,nil));
let list_l2=cons(3,tail(list_l1));
console.log(list_l1);
console.log(list_l2);
console.log("******************");
function listIota(a,b){
    if(b<a) return nil;
    if(a===b-1) return cons(a,nil);
    return cons(a,listIota(a+1,b));}
console.log(listIota(1,4));
let lll1=listIota(1,5);
let lll2=listIota(5,10);
console.log(tail(tail(tail(listIota(1,4)))));
console.log(listIota(4,1));
console.log("*******************");
function vf(list){
    if(list===nil) return "[]";
    if(tail(list)===nil) return `${head(list)}]`;
else return `${head(list)}`+`,${vf(tail(list))}`;}
function vf2(list){
    if(list===nil) return [];
    if(tail(list)===nil) return `${head(list)}`;
else return `${head(list)}`+`,${vf2(tail(list))}`;}
let ll=listIota(1,4);
function listDisp(list){
    let list2=list;list2.vv1=`[${head(list)}`;
    return `"${vf(list2)}"`;}
console.log(listDisp(ll));
console.log(listDisp(nil));
console.log("*******************");
function listLength(list){
    if(list===nil) return 0;
    else return 1+listLength(list.vv2);}
    console.log(listLength(nil));
    console.log(listLength(listIota(1,6)));
console.log("*******************");
    function listAbsRec(list){
	if(list===nil) return {};//mieux ..///
else return cons(Math.abs(list["vv1"]),listAbsRec(tail(list)));}
console.log(listAbsRec(cons(1,cons(-2,nil))));
console.log("*******************");
    function list_to_arrayy(ll){
	if(ll===nil) return [];
	return [head(ll)].concat(list_to_arrayy(tail(ll)));}
    function listAppend(l1,l2){
	if(l1===nil) return list_to_arrayy(l2);
	else return [head(l1)].concat(listAppend(tail(l1),l2));}
    console.log(listAppend(listIota(1,3),listIota(1,4)));
 console.log(listAppend(listIota(1,5),listIota(5,10)));
    console.log("*********************");
    /*function f<T>(n:number):number{
	return 0;} nexiste pas CAR on travaille sur le nodev16.0.0.//..///.    .()()
//reste le bonus de append R.t->++|;/// && debut exo5 qui est rotation d'une liste
//en recursif prefere.
*/
//=>listRL===listRotateLeft qui effectue une rotation de la liste.
function loop(list,ff){
	if(list===nil) return nil;
	else{
	    if(tail(list)!==nil){
		var head_next=ff(head(list),head(tail(list)));
		return cons(head_next,loop(tail(list),ff));}
	    else{
		return nil;}}}
function loop21(list,ff){
	if(list===nil) return nil;
	else{
	    if(tail(list)!==nil){
		var head_next=ff(head(list),head(tail(list)));
		return cons(head_next,loop21(tail(list),ff));}
	    else{
		return cons(0,{});}}}
function loop22(list,ff,ffg){
	if(list===nil) return nil;
	else{
	    if(head(list)!==0){
		var head_next=ff(head(list),head(tail(list)));
		return cons(head_next,loop22(tail(list),ff,ffg));}
	    else{
		return cons(ffg,nil);}}}
function loop22_2(list,ff,ffg){
	if(list===nil) return nil;
	else{
	    if(tail(list)!==nil){
		var head_next=ff(head(list),head(tail(list)));
		return cons(head_next,loop22_2(tail(list),ff,ffg));}
	    else{
		return cons(head(list),cons(ffg,nil));}}}
//attention aux effets de bords()();//./..
//head(list2) recoit en ff(.//)IMPOSSIBLE car ~ en C : ptr=..
//head(list2) est de type number donc type primitif immuable
//donc ~ *ptr avec ptr adresse allouée via calloc ou malloc
//*ptr=.. <=> head(list2)=.. MAIS ATTENTION:head() est un retour
//de fonction donc en theorie immuable en terme de retour d'adresse~~.////
//car adresse fixe.((theoreme+faits de la depilation en appels globaux 
//en INTERNES.))////.//
//RQ:>> head(list(List.//))=.. en affectation--cOMMANDEE impossible
//car retour fonction => instanciation depuis un generique classe objet ~~
//(objet ~ classe) objet --___instance POP discrete donc EN tant que retour
//mutable (number via Number() et number_autre via Function()) derivation
//nouvelle instance PAR RETOUR en adressage car retour(& fixe)=>c'est
//une valeur mutable donc objet mutable manipulé en tant qu'adresse
//car les objets mutables sont passés par reference ~²²;// {(nn references
//car derivation depuis la fonction SOURCE DONC SUPPRESSION via free(void*)
//de Orinico--v8. => cet objet adresse est nn allouée au début via l'equiva-
//lent malloc enC///// donc cest equivaut a dire +que l'& ~ ptr avec
//ptr type-adressage-BRUTTT au debut.=>> l'objet mutable est une adresse
//ptr/..*ptr; donc <~ptr=.. ne change pas *ptr car en type-casting refus
//en mode appli. de global+(()) donc list2.vv1~²² affectation promeut
//la modification d'un champ en valeur inscrite => impossible car cela est ~
// *ptr changera => erreur left-hand assigned value..///////
//voila:>  les types immuables en retours de fonctions batissent
//le fondement de nn-modify & => objets mutables avec &fixe(~);<=>àdire 
//que c'est surtout un ptr avec ptr=.. reste *ptr donc error qui assigne
//que la valeur accesible en lecturE change.
//resume: retour => & en type mutable car fonction objet => nn reference
//donc ~ptr avec *ptr change pas si ptr~objet o syntaxe suivant les droits
//d'accès modifié donc la valeur head(list2) ne doit pas subir la transfo
//=.. : ERROR left-hand assigned value.
//CONCLUSION: l'erreur left-hand d'assignement a eviter 
//<=><=> affectation des valeurs de retours fonctions en ...Type immuable
//IMPOSSIBLE ET DONC SURTOUT à eviter.

//function loop(list,ff);
console.log("******* ********************************");
let listt=cons(1,cons(2,nil));
console.log(listAppend(loop(listt,(x,y)=>2*x),cons(4,nil)));
console.log("**************************");
    function listRotateLeft(l){
	return listAppend(tail(l),cons(head(l),nil));}
    console.log(listRotateLeft(listIota(1,5)));
function listRL(l){
    return listAppend(loop(l,(x,y)=>y),cons(head(l),nil));}
 console.log(listRL(listIota(1,5)));
//affichage en vv2.vv1 '[undefined' car recupere champ en + inactif
//donc en termes techniques undefined donc ..(.vv1)=un str explicatif
//$() donnee un [(consideration de +(fonction retours) 
//donc '[undefined'.()///////.
function loop_df(list,ff,initt){
    if(initt===0) return list;
    return loop_df(loop21(list,ff),ff,initt-1);}
function listRL_RC(l){
    let lm=loop_df(l,(x,y)=>y,1);let an=head(l);console.log(lm.vv2.vv2,an);
    return loop22(lm,(x,y)=>x,an);}
console.log(listRL_RC(listIota(1,5)).vv2.vv2);
console.log(list_to_arrayy(listRL_RC(listIota(1,5))));
function r5(l,n,headdd,m){//n=0 au debut.
    if(n===m-1) return listAppend(l,cons(headdd,nil));
    return r5(tail(l),m-1,headdd,m);}
//m===listLength(l).
console.log(r5(listIota(1,5),0,1,4));
//voila pas la peine de rajouter.
//4 versions: 1 normal|// 2 ordre superieur tres IMPLICITE 3 ~ recursif 
//via fonction annexe caracterisTIqUE 3 recursif terminal.++!/////
console.log("***********************");
//version r.T+++ de concatenation de 2 listes.
function rt_cc(l1,l2){
    let lmn=listAppend(cons(head(l1),nil),loop22_2(tail(l1),(x,y)=>x,head(l2)));
    return lmn.concat(list_to_arrayy(tail(l2)));}
    console.log(rt_cc(lll1,lll2));
    function arrayy_to_list(l){
	if(1>=l.length) return cons(l[0],nil);
	return cons(l[0],arrayy_to_list(l.slice(1,l.length)));}
    //console.log(arrayy_to_list([1,2,3]).vv2);
function rt_cc2(l1,l2,l3){
	if(l2===nil) return l3;
	return rt_cc2(l1,tail(l2),arrayy_to_list(listAppend(l3,cons(head(l2),nil))));
    }
    console.log(rt_cc2(lll1,lll2,lll1));
console.log(rt_cc2(lll1,lll2,lll1).vv2.vv2.vv2);
    console.log(list_to_arrayy(rt_cc2(lll1,lll2,lll1)));
//dans toutes ces versions on utilise la fonction en question...
    console.log("reglage dee ce qui a ete remarque puis ecrit²**********::>>>>>>>");
    function annn(v,l){
	let elem=looppp(listLength(l)-1,l,tail).vv1;//pas la peine de celui-là.
//car on veut ajouter le v a la fin donc loop22_2 fera l'affaire.
	let lkkk=loop22_2(l,(x,y)=>x,v);//v a ete ajoute a la fin de l.
	//console.log(elem,lkkk.vv2.vv2.vv2.vv2);
	return lkkk;}    
function rttt(l1,l2,l3){
	if(l2===nil) return l3;
    return rttt(l1,tail(l2),annn(head(l2),l3));}
    console.log(list_to_arrayy(rttt(lll1,lll2,lll1)));
    function direct(l1,l2,l3){
	if(l2===nil) return l3;
	else return direct(l1,tail(l2),loop22_2(l3,(x,y)=>x,head(l2)));}
    console.log(list_to_arrayy(direct(lll1,lll2,lll1)));
console.log("*********************************************************************");
    console.log("*****************bonus2:>>\n();");
    function looppp(n,l,ff){
	if(n===0) return l;
	return looppp(n-1,ff(l),ff);}//application n fois de l=f(l);//./////  .
    function rr_v0_an1(l){
	return looppp(listLength(l)-1,l,listRL_RC);}
    console.log(list_to_arrayy(rr_v0_an1(lll1)));
    function v2_5(l){
	let lk=looppp(listLength(l)-1,l,tail);
	return listAppend(lk,loop(l,(x,y)=>x));}
    console.log(v2_5(lll2));
    function v3_5(l,ll){
	if(tail(l)===nil) return listAppend(l,loop(ll,(x,y)=>x));
	return v3_5(tail(l),ll);}
    console.log(v3_5(lll1,lll1),v3_5(lll2,lll2));
    console.log("*****************************************************");
console.log("*****************************************************");
console.log("*****************************************************");
    function palind(l){
	if(l===nil) return true;
	if(listLength(l)===1) return true;
	return palind(loop(tail(l),(x,y)=>x)) && (head(l)===head(looppp(listLength(l)-1,l,tail)));}
    let lln=listIota(1,5);
    let llnm=cons('a',cons('b',cons('c',cons('b',cons('a',nil)))));
 let llnm2=cons('a',cons('b',cons('c',cons('b',cons('d',nil)))));
    let llnm23=cons('a',cons('b',cons('b',cons('a',nil))));
    console.log(palind(llnm23),palind(llnm2),palind(llnm));
    function pl2(l,ll,k){//debut k=0.
	if(Math.floor(listLength(ll)/2)===k) return true; 
return pl2(tail(l),ll,k+1) && head(l)===head(looppp(listLength(l)-k-1,l,tail));}
    console.log(pl2(llnm23,llnm23,0),pl2(llnm2,llnm2,0),pl2(llnm,llnm,0));
   
 let llnm244=cons('a',cons('b',cons('c',cons('b',cons('c',cons('b',cons('a',nil)))))))
;
 let llnm2444=cons('a',cons('b',cons('c',cons('b',cons('c',cons('b',cons('d',nil)))))))
;
    console.log(pl2(llnm2444,llnm2444,0));//false.!!/////////.///

//complexite tjrs n**2().//
    function loopl(l,n){
	let lll=list_to_arrayy(l);
	if(n===0) return lll;
	let vv=looppp(listLength(l)-1,l,tail).vv1;
	return [vv].concat(loopl(loop(l,(x,y)=>x),n-1));}
    function inverse(l){
//faire la rotation en len-1 fois mais a chaque fois restreindre en nn/DERNIER elem..///
        return arrayy_to_list(loopl(l,listLength(l)-1));}
    console.log(list_to_arrayy(inverse(lll1)));
//loopl(l,n) applique n fois (dernier element + avant-dernier ainsi de suite)
//en faisant ce qui suit: recuperer le dernier element
//puis: [(vv);///////].concat("recursivite suivant pseudo_tail
//soit en loop ordinaire") avec cdt.d'arret return lll=list_to_arrayy(l) 
//SI : on a n===0. cest en gros linverse de l.
    function vfff(l,n){
	if(n===0) return nil;
	else{
	    let vv=looppp(listLength(l)-1,l,tail).vv1;
	    return cons(vv,vfff(loop(l,(x,y)=>x),n-1));}}
    console.log(list_to_arrayy(vfff(lll2,listLength(lll2))));
    function pl_vfa(l){//recupere le fond(l tronque head et vv.//)///
	if(listLength(l)===1) return true;
	let llll=loop(tail(l),(x,y)=>x);
	let lllll=looppp(listLength(l)-1,l,tail).vv1;
	return lllll===head(l) && pl_vfa(llll);}
    console.log(pl_vfa(llnm244),pl_vfa(llnm2444));//MARCHE.//////////
    function equal(l,ll){
	if(l===nil) return true;
	return head(l)===head(ll) && equal(tail(l),tail(ll));}
    function invv(l){
	if(tail(l)===nil) return cons(head(l),nil);
	return annn(head(l),invv(tail(l)));}
    console.log(list_to_arrayy(invv(lll2)));
    function vvv2(l){
	let n=Math.floor(listLength(l)/2)+listLength(l)%2;
	let ll1=looppp(n,l,tail);
	let linv=invv(l);
	    let ll2=looppp(n,linv,tail);
	return equal(ll2,ll1);}
function vvv(l){
	let n=Math.floor(listLength(l)/2)+listLength(l)%2;
	let ll1=looppp(n,l,tail);
	let linv=vfff(l,listLength(l));
	    let ll2=looppp(n,linv,tail);
	return equal(ll2,ll1);}
    console.log(vvv2(llnm244),vvv(llnm2444));
///Ct(vvv)=n.//
    function bcl(list,n){
	if (n===0) return head(list);
	return bcl(tail(list),n-1);}
    function vvv_ed(l){
let n=Math.floor(listLength(l)/2)+listLength(l)%2;let linv=invv(l);
	return equal(looppp(n,l,tail),looppp(n,linv,tail));}
    function fd(l,ll){
	let n=Math.floor(listLength(ll)/2)+listLength(ll)%2;
	let linv=invv(ll);
	    let ll2=looppp(n,linv,tail);
	if(listLength(l)<listLength(ll)) return equal(l,ll2);
	else{
	let ll1=looppp(n,l,tail);
	    return fd(ll1,ll);}}
    console.log(fd(llnm244,llnm244),fd(llnm2444,llnm2444));
 //la plus forte est celle-ci..///
    function retirer(l,ll){
	return equal(l,ll);}
    function log_ctt(l,lk,p){
	if(listLength(l)===1) return true;
	    else{
	let n=Math.floor(listLength(l)/2)+listLength(l)%2;
let nm=Math.floor(listLength(lk)/2)+listLength(lk)%2;
		if(p!=0){let lll=invv(l);
		       let lg=looppp(n,lll,tail);
			 let lg3=looppp(nm,lk,tail);console.log(lg,lg3);
		       return retirer(lg,lg3) && log_ctt(lg,lg3,0) && log_ctt(lg3,lg,0);}
		else{
		let lg=looppp(n,l,tail);
		    let lg3=looppp(nm,lk,tail);console.log(lg,lg3);
return retirer(lg,lg3) && log_ctt(lg,lg3,0) && log_ctt(lg3,lg,0);}}}
    console.log(log_ctt(llnm244,llnm244,1),log_ctt(llnm2444,llnm2444,1));
    console.log("fin exo1-5 && exo8************suite\n******************:>>");
//insert implementation:::
    function insert(e,l){
	return loop22_2(l,(x,y)=>x,e);}
    console.log(list_to_arrayy(insert(5,lll1)));
    function insert2(e,l){
	if(l===nil) return cons(e,nil);
	return cons(head(l),insert2(e,tail(l)));}
//insertion prenant en compte le triage de la nouvelle LISTE(()).
    function inser(e,l){
	if(e<=head(l)) return cons(e,l);
	else return cons(head(l),inser(e,tail(l)));}
    console.log(list_to_arrayy(insert2(5,lll1)));
    let ljk=cons(3,cons(1,cons(2,cons(0,cons(4,nil)))));
    function tri_insertion(l){
	if(listLength(l)===2) return inser(head(l),tail(l));
	return inser(head(l),tri_insertion(tail(l)));}
    console.log(list_to_arrayy(tri_insertion(ljk)));
let ljk222=cons(30,cons(-1,cons(-2,cons(0,cons(432,nil)))));
console.log(list_to_arrayy(tri_insertion(ljk222)));
    const opp=function ju(l,k){
	return l<=k;}
    function tri_insertion_generique(l,op){
	//-(1)----console.log(l);
	if(listLength(l)===2) return inser33(head(l),tail(l),op);
	return inser33(head(l),tri_insertion_generique(tail(l),op),op);}
    function inser33(e,l,op){
	//cas important si e est le plus grand a la fin => insert2(e,l). 
	//((2))[[[]]]console.log(l);
	if(l===nil) return cons(e,nil);
	if(op(e,head(l))) return cons(e,l);
	else return cons(head(l),inser33(e,tail(l),op));}
    console.log(list_to_arrayy(ljk),list_to_arrayy(tri_insertion_generique(ljk,opp)));
    console.log(list_to_arrayy(llnm244),list_to_arrayy(llnm2444));
  const op_l= function ordre_lexicographique_pluss(e1,e2){
      return e1.charCodeAt(e1)<=e2.charCodeAt(e2);}
   /* var eppl="A";
    console.log(eppl.charCodeAt(eppl));*/
    let list_l=cons('e',cons('a',cons('g',cons('c',cons('f',cons('d',cons('h',nil)))))));
    console.log(list_to_arrayy(tri_insertion_generique(list_l,op_l)));
    function str_to_arrayy(ss){
	//(3--)console.log(ss[0],ss.length,ss.slice(1,ss.length));
	if(ss.length===1) return [ss[0]];
	else return [ss[0]].concat(str_to_arrayy(ss.slice(1,ss.length)));}
    let ss="erfgtfre";
    console.log(str_to_arrayy(ss));
    function arrayy_to_str(th){
	if(th.length===1) return `${th[0]}`;
	return `${th[0]}`+arrayy_to_str(th.slice(1,th.length));}
    console.log(arrayy_to_str(str_to_arrayy(ss)));
    function ordre_lexicographique(stringgg){
	let list_l_transfo=arrayy_to_list(str_to_arrayy(stringgg));
	//console.log(list_l_transfo.vv2.vv2.vv2.vv2.vv2.vv2);
	let abcde=tri_insertion_generique(list_l_transfo,op_l);
	//console.log(abcde);
	return arrayy_to_str(list_to_arrayy(abcde));}
    console.log(ordre_lexicographique(ss)); 
//VOILA!.////
    let st="A";let sty="a";let styy="Z";
    console.log(styy.charCodeAt("Z"),sty.charCodeAt("a"));
    function donne(n){
	let stu="abcdefghijklmnopqrstuvwxyz";console.log(25-90+n);
	return stu[25-(90-n)];}
function donne_bis(n){
	let stu="ABCDEFGHIJKLMNOPQRSTUVWXYZ";//console.log(25-90+n);
//si miuscule donc nbr>=97 si 97 on retourne nbr-97
	return stu[n-97];}
    function nn_casse(st){
	//test si ###miniscule.
	let k=0;let st_rslt="";
	while(k<st.length){
	    console.log(st[k]);
	    let sty=st[k];let mm=sty.charCodeAt(sty);
	    if(mm<=90 && mm>=65){
let lnn=donne(sty.charCodeAt(sty));
		st_rslt+=`${lnn}`;}
	    else st_rslt+=`${sty}`;
	    k++;}
	return st_rslt;}
function nn_casse2(st){
	//test si ###miniscule.
    let k=0;let st_rslt="";let tableau=[];
	while(k<st.length){
	    console.log(st[k]);
	    let sty=st[k];let mm=sty.charCodeAt(sty);
	    if(mm<=90 && mm>=65){
		let lnn=donne(sty.charCodeAt(sty));tableau.push(k);
		st_rslt+=`${lnn}`;}
	    else st_rslt+=`${sty}`;
	    k++;}
    return st_rslt,tableau;}
    console.log(nn_casse2("rfgAdfZEDr"));
//donne bis retourne la majuscule d'une minuscule
    /*function jt(s){//prend s et l'adapte...(())
	let k=0;let m=s.length;
	while(k<m){
	    let str=s[k];let nbr=str.charCodeAt(str);*/
    let op_l_2_cassee=function jt(e1,e2){
	let nbr1=e1.charCodeAt(e1);let nbr2=e2.charCodeAt(e2);
	if(nbr1>=97 && nbr2<97) return nbr1-97+65<=nbr2;
	if(nbr1<97 && nbr2>=97) return nbr1<=nbr2-97+65;
	else return nbr1<=nbr2;}
    function ordre_lexico_nn__casse(stringggg){
	return ordre_lexicographique(nn_casse(stringggg));}
    console.log(ordre_lexico_nn__casse("rfgAdfZEDr"));
    function ordre_retabli_mieuxx(str){
	let ordre_1=ordre_lexicographique(nn_casse(str));
	let ordre_2=nn_casse2(str)[1];//indices des majuscules.
	let aa1=arrayy_to_list(str_to_arrayy(str));
	let aa2=tri_insertion_generique(aa1,op_l_2_cassee);
	let aa3=list_to_arrayy(aa2);
	return arrayy_to_str(aa3);}
console.log(ordre_retabli_mieuxx("rfgAdfZEDr"));
    console.log("***************************************************");
    console.log("******  EXO7(tri---fusion) ********************************");
//fonction fusion de 2 listes triées.
    function fusion(l1,l2){
	if(l1===nil) return l2;
	if(l2===nil) return l1;
	if(head(l1)<=head(l2)){
	    return cons(head(l1),fusion(tail(l1),l2));}
	else{
	    return cons(head(l2),fusion(l1,tail(l2)));}}
const left = cons(1, cons(6, cons(8, cons(47, cons(87, nil)))));
const right = cons(3, cons(8, cons(9, cons(21, cons(50, nil)))));
    console.log(list_to_arrayy(fusion(left,right)));
    let bcll=function bg(n,l){
	if(n===0) return l;
	return bg(n-1,loop(l,(x,y)=>x));}
let lx=cons(1,cons(0,cons(7,cons(5,cons(10,cons(3,cons(6,cons(88,cons(81,cons(11,nil))))))))));
    console.log("**----------------**");
    console.log(get2ndHalf(left));
    function getFirstHalf(l){
	if(listLength(l)===1) return l;
	if(listLength(l)%2===0) {return bcll(listLength(l)/2,l);}
	let n=Math.floor(listLength(l)/2)+listLength(l)%2;
	return bcll(n-1,l);}
    console.log(list_to_arrayy(getFirstHalf(right)));
    function get2ndHalf(l){
	if(listLength(l)===1) return nil;
	if(listLength(l)%2===0){return looppp(listLength(l)/2,l,tail);}
let n=Math.floor(listLength(l)/2)+listLength(l)%2;
	return looppp(n,l,tail);}
    console.log(list_to_arrayy(get2ndHalf(left)));
//2ieme methode:>>
    function part2(l,n,ll){//listes / len%2=0./////((()));;
	if(n===Math.floor(listLength(ll)/2)+listLength(ll)%2) return l;
	return part2(tail(l),n+1,ll);}
    console.log(list_to_arrayy(part2(right,0,right)));
    function part1(l){//MEME remarque.
	let n=Math.floor(listLength(l)/2)+listLength(l)%2;
	let an_1=function c(v,l){
	    if(l===nil) return cons(v,nil);
	    return cons(head(l),an_1(v,tail(l)));}
	let inv_1=function cc(l){
	    if(l===nil) return nil;
	    return an_1(head(l),inv_1(tail(l)));}
	let l_inter_bis=function ccc(l,n,f){
	    if(n===0) return l;
	    return l_inter_bis(tail(l),n-1,f);}
	let l_annexe=inv_1(l);
	let lh2=l_inter_bis(l_annexe,n-1,tail);
	let lh33=inv_1(lh2);
	return lh33;}
    console.log(list_to_arrayy(part1(right)));
    console.log("!!*************!!!!");
    console.log("question3 et les questions qui suivent cette DERNIERE");
    function tri_fusion(l){
	if(listLength(l)===1) return l;
	else{
	    let expres1=tri_fusion(getFirstHalf(l));
	    let expres2=tri_fusion(get2ndHalf(l));
	    //console.log(list_to_arrayy(expres2));
	    return fusion(expres1,expres2);}}
    console.log(list_to_arrayy(lx));
    console.log(list_to_arrayy(getFirstHalf(lx)),list_to_arrayy(get2ndHalf(lx)));
    console.log(list_to_arrayy(tri_fusion(lx)));
//fautes au niveau de retour<²//((())). de part1/2_ax puis
//adaptation retour de tri_fusion TERMINALLL 
//et avant ajout des modifications en cas listLength(l)%2===0
//VIA:>>> return bcll(listLength(l)/2,l) et return pour l'autre DEEEEE
//looppp(listLength(l)/2,l,tail).
//on travaille actuellement sur les fonctions:
//1-getFirstHalf(l) && 2-get2ndHalf(l) && 3-fusion(l1,l2).
    function tri_fusion__version___finale(l){
	if(listLength(l)===1) return l;
	return fusion(tri_fusion__version___finale(getFirstHalf(l)),tri_fusion__version___finale(get2ndHalf(l)));}
    console.log(list_to_arrayy(tri_fusion__version___finale(lx)));
//ca marche.
//fusion+getFirstHalf+get2ndHalf permettent UNE CONSTRUCTION
//d'un algo en 0(n*log(n)) via un mode recursif bouclé sur les retours de la
//fonction tri_fusion globale application algorithmique structuréEEE.
    console.log("*************************************************************************");


//FIN DU TD4.
