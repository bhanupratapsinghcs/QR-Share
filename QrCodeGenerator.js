QrCodeGenerator = {
	

	generateQrCode: function(qrCodeContent){
		document.getElementById('qrCode').innerHTML = "";

		var qrcode = new QRCode(document.getElementById('qrCode'), {
		    text: qrCodeContent,
		    width: 326,
		    height: 326,
		    colorDark : "#ff0000",
		    colorLight : "#fff000",
		    correctLevel : QRCode.CorrectLevel.H,
		});
	},
};

window.onload = function(){

	document.getElementById('generateQrCodeButton').addEventListener('click',displayButton);

	document.getElementById('dwnld').addEventListener('click',dwnld);

	function displayButton(){
		var txt = document.getElementById('qrCodeContentTextArea').value;

		QrCodeGenerator.generateQrCode(txt);
	};

	function dwnld() {
		var edge = document.getElementById("qrCode").firstChild;

		if(window.navigator.msSaveBlob){
			window.navigator.msSaveBlob(edge.msToBlob(), 'qrCode.png');
		}else{
			// var url = document.getElementById('test').lastChild.getAttribute('src');
			var url = edge.toDataURL();
			var link = document.createElement('a');
			link.download = 'QrCode';
			link.href = url;
			link.click();
		}
	};

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
