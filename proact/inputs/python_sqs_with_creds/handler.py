import boto3

MY_ACCESS_KEY = 'AAAAAAAAAAAAAAAAAAAA'
MY_SECRET_KEY = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

def lambda_handler(event, context):
    sqs = boto3.client('sqs')
    sqs.send_message("message args")

    return True
