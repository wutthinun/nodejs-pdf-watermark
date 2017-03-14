var pdf = require('pdfkit');
var fs = require('fs');

var myDoc = new pdf;

myDoc.pipe(fs.createWriteStream('simple.pdf'));

myDoc.font('Gabriola.ttf', 22).text('Node JS PDF', 100, 100)

myDoc.image('Sample-trans.png', 100, 100 ,{
   scale: 0.5,
});

myDoc.font('Gabriola.ttf', 14).text('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 100, 200)

myDoc.end();
