import boto3
import logging
import os
import json

dynamodb_client = boto3.client('dynamodb')
sns_client = boto3.client('sns')

CUSTOMERS_TABLE_NAME = os.getenv('CUSTOMERS_TABLE', "functions_table")
SNS_TOPIC_ARN_FUNCTION_MODIFIED = os.getenv('SNS_TOPIC_ARN_FUNCTION_MODIFIED', None)

with_sns_msg = True

def notify_new_customer(key):
    message = {
        'newCustomer': key,
    }

    sns_client.publish(TopicArn=SNS_TOPIC_ARN_FUNCTION_MODIFIED, Message=json.dumps(message))

    logging.info('sns message published')

def lambda_handler(event, context):
    # This lambda will handle new user files uploaded to the customer s3 bucket
    for record in event['Records']:
        bucket = record['s3']['bucket']['name']
        key = record['s3']['object']['key']

        logging.debug("Got a new customer file")

        dynamodb_client.put_item(TableName=CUSTOMERS_TABLE_NAME, Item={"key": key})
        if with_sns_msg:
            notify_new_customer(key)
    return event


# if __name__ == "__main__":
#     lambda_namdler({})
