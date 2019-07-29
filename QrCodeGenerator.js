QrCodeGenerator = {
	

	generateQrCode: function(qrCodeContent){
		document.getElementById('qrCode').innerHTML = "";

		var qrcode = new QRCode(document.getElementById('qrCode'), {
		    text: qrCodeContent,
		    width: 326,
		    height: 326,
		    colorDark : "#000000",
		    colorLight : "#ffffff",
		    correctLevel : QRCode.CorrectLevel.H,
		});
	},
};

window.onload = function(){

	function displayButton(){
		var txt = document.getElementById('qrCodeContentTextArea').value;

		QrCodeGenerator.generateQrCode(txt);
	};

	function dwnld() {
		var edge = document.getElementById("qrCode").firstChild;
		//  Egde Support
		if(window.navigator.msSaveBlob){
			window.navigator.msSaveBlob(edge.msToBlob(), 'qrCode.png');
		}
		// Chrome and other desktop browser support
		else{
			// var url = document.getElementById('test').lastChild.getAttribute('src');
			var url = edge.toDataURL();
			var link = document.createElement('a');
			link.download = 'QrCode';
			link.href = url;
			link.click();
			// document.getElementById('sp').innerHTML= url;
		}
	};

	document.getElementById('generateQrCodeButton').addEventListener('click',displayButton);

	document.getElementById('dwnld').addEventListener('click',dwnld);
};


// QrCodeGenerator = {

// 	qrCode: null,

// 	generateQrCode: function(qrCodeContent) {
// 		$('#qrCode').empty();

// 		QrCodeGenerator.qrCode = new QRCode(document.getElementById('qrCode'), {
// 			text: qrCodeContent,
// 			width: 384 - (28 * 2),
// 			height: 384 - (28 * 2),
// 			colorDark: "#000000",
// 			colorLight: "#ffffff",
// 			correctLevel: QRCode.CorrectLevel.H,
// 		});
// 	},
// };

// $(document).ready(function() {
// 	$('#qrCodeContentTextArea').on('keyup', function() {
// 		QrCodeGenerator.generateQrCode($('#qrCodeContentTextArea').val());
// 	});

// 	$('#generateQrCodeButton').click(function() {
// 		QrCodeGenerator.generateQrCode($('#qrCodeContentTextArea').val());
// 	});

// });
