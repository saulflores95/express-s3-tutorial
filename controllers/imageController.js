const path = require('path');
const fs = require('fs');
const S3FS = require('s3fs');

const s3fsImpl = new S3FS('name-of-buckit', {
  accessKeyId: '',
  secretAccessKey: '',
  subregion: 'us-west-2'
});

const imageController = {}

imageController.post = function (req, res) {
  var file = req.file
  console.log(req.file)
}

module.exports = imageController;
