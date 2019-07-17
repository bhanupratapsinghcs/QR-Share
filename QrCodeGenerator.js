QrCodeGenerator = {

	qrCode: "QRShare & Generator",

	generateQrCode: function(qrCodeContent) {
		$('#qrCode').empty();

		QrCodeGenerator.qrCode = new QRCode(document.getElementById('qrCode'), {
			text: qrCodeContent,
			width: 384 - (28 * 2),
			height: 384 - (28 * 2),
			colorDark: "#000000",
			colorLight: "#ffffff",
			correctLevel: QRCode.CorrectLevel.H,
		});
	},
};

$(document).ready(function() {
	$('#qrCodeContentTextArea').on('keyup', function() {
		QrCodeGenerator.generateQrCode($('#qrCodeContentTextArea').val());
	});

	$('#generateQrCodeButton').click(function() {
		QrCodeGenerator.generateQrCode($('#qrCodeContentTextArea').val());
	});
});