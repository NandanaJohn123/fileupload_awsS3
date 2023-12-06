const AWS=require("aws-sdk");
const s3=new AWS.S3();
(async () => {
    await s3
    .putObject({
        Body: "hello world",
        Bucket: "nan-my-uploads",
        Key: "sensor_data.jsonnode"
    })
    .promise();
})();