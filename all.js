console.clear();

// ===============


let allData = [
	{ length: 5 ,width: 16 ,name: 'A' },
	{ length: 6 ,width: 18 ,name: 'B'},
	{ length: 8 ,width: 24 ,name: 'C'},
	{ length: 10 ,width: 30 ,name: 'D'},
	{ length: 12 ,width: 36 ,name: 'E'},
	{ length: 14 ,width: 48 ,name: 'F'},
	{ length: 18 ,width: 60 ,name: 'G'},
	{ length: 22 ,width: 62 ,name: 'H'},
	{ length: 31 ,width: 15 ,name: 'I'},
] ;

let result = [];


// =======啟動呼叫區========


creatResultArray();


MyselfPlusOther1(allData); //1-1

MyselfPlus(); // *2

MyselfPlusOther2_Myself2PlusOther1(allData); //2-1,1-2

Myself2PlusOther2(allData); //2-2

Myself_x3();  //*3

MyselfPlusOther3_Myself3PlusOther1(allData); //3-1,1-3

Myself2PlusOther3_Myself3PlusOther2(allData); //3-2,2-3

// =====主要呼叫區======



function creatResultArray (){

	let string =[]

	for (let i = 9 ; i < 59 ; i++) {
		string.push(`{ "result": "${i}","compose":"" }`);

	}


	stringToObject(string,result);

	composeBuildArray(result);

}

function composeBuildArray(value) {

	for (let i = 0 ; i <value.length; i++) {
		value[i].compose =[];
	}
	
}

       /******方法******/

function MyselfPlus() {

	let lengthArray= [];
	let widthArray= [];
	let knifeName= [];

	for (let i = 0 ; i < allData.length ; i++) {

		lengthArray.push(allData[i].length *2);
		widthArray.push(allData[i].width *2);
		knifeName.push(allData[i].name);
	}
	
	addResultArray(MyselfPlus_filterOver58(lengthArray,widthArray,knifeName));
}

function MyselfPlusOther1(value) {
	
	let lengthArray= [];
	let widthArray= [];
	let knifeName1= [];
	let knifeName2= [];
	let mergeArrayValue = [] ;
	let mergeArrayknife = [];


	for (var i = 0 ; i < value.length ; i++) {
		for (var j = 0 ; j < value.length; j++) {

				lengthArray.push(value[i].length + value[j].width);
				knifeName1.push(value[i].name +" + "+ value[j].name);
		}
	}

	// console.log(lengthArray);
	// console.log(knifeName1);

	for (var i = 0 ; i <value.length ; i++) {
		for (var j = 0 ; j < value.length; j++) {

			let compare = value[j].name +" + "+ value[i].name ; 
			let lookFor = knifeName1.indexOf(compare) ;

			// 篩選重複的
			if (lookFor == -1) {
				widthArray.push(value[i].width + value[j].length);
				knifeName2.push(value[i].name +" + "+ value[j].name);
			}		
		}
	}
	// console.log(widthArray);
	// console.log(knifeName2);

	mergeArrayValue = lengthArray.concat(widthArray);
	mergeArrayknife = knifeName1.concat(knifeName2);

	// console.log(mergeArrayValue);
	// console.log(mergeArrayknife);


	addResultArray(filterOver58(mergeArrayValue,mergeArrayknife));
}

function MyselfPlusOther2_Myself2PlusOther1(value){

	let lengthArray= [];
	let widthArray= [];
	let knifeName1= [];
	let knifeName2= [];
	let mergeArrayValue = [] ;
	let mergeArrayknife = [];


	for (var i = 0 ; i < value.length ; i++) {
		for (var j = 0 ; j < value.length; j++) {

			lengthArray.push(value[i].length + value[j].width*2);
			knifeName1.push(value[i].name +" + "+ value[j].name+"x2");
		}
	}

	// console.log(lengthArray);
	// console.log(knifeName1);

	for (var i = 0 ; i <value.length ; i++) {
		for (var j = 0 ; j < value.length; j++) {
		
			widthArray.push(value[i].width + value[j].length*2);
			knifeName2.push(value[i].name +" + "+ value[j].name+"x2");
		}
	}
	// console.log(widthArray);
	// console.log(knifeName2);

	mergeArrayValue = lengthArray.concat(widthArray);
	mergeArrayknife = knifeName1.concat(knifeName2);

	// console.log(mergeArrayValue);
	// console.log(mergeArrayknife);


	addResultArray(filterOver58(mergeArrayValue,mergeArrayknife));
}

function Myself2PlusOther2(value) {
	
	let lengthArray= [];
	let widthArray= [];
	let knifeName1= [];
	let knifeName2= [];
	let mergeArrayValue = [] ;
	let mergeArrayknife = [];


	for (var i = 0 ; i < value.length ; i++) {
		for (var j = 0 ; j < value.length; j++) {

				lengthArray.push(value[i].length*2 + value[j].width*2);
				knifeName1.push(value[i].name + "x2" +" + "+ value[j].name +"x2");
		}
	}

	// console.log(lengthArray);
	// console.log(knifeName1);

	for (var i = 0 ; i <value.length ; i++) {
		for (var j = 0 ; j < value.length; j++) {

			let compare = value[j].name + "x2" +" + "+ value[i].name + "x2" ; 
			let lookFor = knifeName1.indexOf(compare) ;

			// 篩選重複的
			if (lookFor == -1) {
				widthArray.push(value[i].width*2 + value[j].length*2);
				knifeName2.push(value[i].name + "x2" +" + "+ value[j].name + "x2");
			}		
		}
	}
	// console.log(widthArray);
	// console.log(knifeName2);

	mergeArrayValue = lengthArray.concat(widthArray);
	mergeArrayknife = knifeName1.concat(knifeName2);

	// console.log(mergeArrayValue);
	// console.log(mergeArrayknife);

	addResultArray(filterOver58(mergeArrayValue,mergeArrayknife));
}

function Myself_x3() {

	let lengthArray= [];
	let widthArray= [];
	let knifeName= [];

	for (let i = 0 ; i < allData.length ; i++) {

		lengthArray.push(allData[i].length *3);
		widthArray.push(allData[i].width *3);
		knifeName.push(allData[i].name);
	}
	
	addResultArray(Myself_x3_filterOver58(lengthArray,widthArray,knifeName));
}

function MyselfPlusOther3_Myself3PlusOther1(value){

	let lengthArray= [];
	let widthArray= [];
	let knifeName1= [];
	let knifeName2= [];
	let mergeArrayValue = [] ;
	let mergeArrayknife = [];


	for (var i = 0 ; i < value.length ; i++) {
		for (var j = 0 ; j < value.length; j++) {

			lengthArray.push(value[i].length + value[j].width*3);
			knifeName1.push(value[i].name +" + "+ value[j].name+"x3");
		}
	}

	// console.log(lengthArray);
	// console.log(knifeName1);

	for (var i = 0 ; i <value.length ; i++) {
		for (var j = 0 ; j < value.length; j++) {
		
			widthArray.push(value[i].width + value[j].length*3);
			knifeName2.push(value[i].name +" + "+ value[j].name+"x3");
		}
	}
	// console.log(widthArray);
	// console.log(knifeName2);

	mergeArrayValue = lengthArray.concat(widthArray);
	mergeArrayknife = knifeName1.concat(knifeName2);

	// console.log(mergeArrayValue);
	// console.log(mergeArrayknife);


	addResultArray(filterOver58(mergeArrayValue,mergeArrayknife));
}

function Myself2PlusOther3_Myself3PlusOther2(value){

	let lengthArray= [];
	let widthArray= [];
	let knifeName1= [];
	let knifeName2= [];
	let mergeArrayValue = [] ;
	let mergeArrayknife = [];


	for (var i = 0 ; i < value.length ; i++) {
		for (var j = 0 ; j < value.length; j++) {

			lengthArray.push(value[i].length*2 + value[j].width*3);
			knifeName1.push(value[i].name + "x2" +" + "+ value[j].name+"x3");
		}
	}

	// console.log(lengthArray);
	// console.log(knifeName1);

	for (var i = 0 ; i <value.length ; i++) {
		for (var j = 0 ; j < value.length; j++) {
		
			widthArray.push(value[i].width*2 + value[j].length*3);
			knifeName2.push(value[i].name + "x2" +" + "+ value[j].name+"x3");
		}
	}
	// console.log(widthArray);
	// console.log(knifeName2);

	mergeArrayValue = lengthArray.concat(widthArray);
	mergeArrayknife = knifeName1.concat(knifeName2);

	// console.log(mergeArrayValue);
	// console.log(mergeArrayknife);


	addResultArray(filterOver58(mergeArrayValue,mergeArrayknife));
}



// =======工具======= 

function stringToObject(value,pushArray){

	for (let i = 0 ; i < value.length; i++) {
		pushArray.push(JSON.parse(value[i]));

	}
}

function MyselfPlus_filterOver58(ary1,ary2,ary3) {
	let filterArray =[];
	let objectArray =[];
	for (let i = 1 ; i < 3 ; i++) {

		let ary = eval(`ary${i}`)

		for (let j = 0  ; j < ary1.length ; j++) {

			if (ary[j] < 59) {

				filterArray.push(`{"mark": "${ary[j]}","knifeNumber": "${ary3[j]} X 2"}`);
				
			}
		}
	}

	stringToObject(filterArray,objectArray);

	// console.log(objectArray);

	return objectArray ;	
}

function Myself_x3_filterOver58(ary1,ary2,ary3) {
	let filterArray =[];
	let objectArray =[];
	for (let i = 1 ; i < 3 ; i++) {

		let ary = eval(`ary${i}`)

		for (let j = 0  ; j < ary1.length ; j++) {

			if (ary[j] < 59) {

				filterArray.push(`{"mark": "${ary[j]}","knifeNumber": "${ary3[j]} X 3"}`);
				
			}
		}
	}

	stringToObject(filterArray,objectArray);

	// console.log(objectArray);

	return objectArray ;	
}

function filterOver58(ary1,knife){

	let filterArray =[];
	let objectArray =[];
	
	for (let i = 0  ; i < ary1.length ; i++) {

		if (ary1[i] < 59) {

			filterArray.push(`{"mark": "${ary1[i]}","knifeNumber": "${knife[i]}"}`);
			
		}
	}
	

	stringToObject(filterArray,objectArray);

	// console.log(objectArray);

	return objectArray ;
}

function addResultArray(value){

	for (let i = 0 ; i <value.length; i++) {
		for (let j = 0 ; j < result.length; j++) {
			if (value[i].mark == result[j].result) {
				result[j].compose.push(value[i]);
			}
		}
	}
}




console.log(result);