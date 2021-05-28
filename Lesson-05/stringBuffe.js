function makeBuffer() {
  var text = '';

  function buffer(piece){ 
	 if (arguments.length == 0) { 
    	return text;
    	}
    	text += piece;
	  };
	  buffer.clean = function(){
		  text = '';
	  }
	  return buffer; 
};

var buffer = makeBuffer();

buffer('JavaScript');
buffer(' need');
buffer(' to learn!');
console.log( buffer()); 
console.log( '-------');
buffer.clean();
console.log( buffer()); 
console.log( '------');

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

console.log( buffer2() ); 

