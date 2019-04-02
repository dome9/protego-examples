Protego CI/CD CLI Tool
Protego integrates with your CI/CD pipeline to ensure posture compliance before deployment and to insert the Protego FSP module into functions.

1. Prerequisites:
Nodejs 6.10
Java 8* (optional), only when instrumenting FSP into a Java function.
Docker* (optional), only for Proact

2. Install the Protego CLI Tool globally:
npm install -g https://artifactory.app.protego.io/protego-serverless-plugin.tgz

FSP (Function Self Protection)
Function Self Protection is a security layer that is embedded around or in the function. Function self-protection enables you to block attacks.

FSP is able to dynamically inspect various points within the flow of functions using various mechanisms such as pattern matching, flow analysis, blacklisting, whitelisting, and apply policies such as reporting, blocking in response to suspicious activity.

USAGE
$ protego fspSam (command line)
This command instrument a given lambda which was created using AWS SAM Framework. It take SAM template.yaml as and input, and output a new template file, ready to be uploaded to AWS account.

The input is the location of the template file, the aws-account-id and the region.

This tool require also the Protego Account ID & Protego Token (you can find protego Account ID & Protego Token in Protego's account integration page ). You can add this configuration via options or you can add Protego section in your SAM template.yaml file

e.g

Protego:
 Account:
  ProtegoAccountId: Add your protego account id here
  ProtegoAccessToken: Add your protego access token here



Usage: protego fspSam [options]

protect a given function

Options:

  -i, --input [path]                  path to SAM template input file (default:template.yaml)
  -a, --aws-account-id <id>           AWS Account ID
  -R, --region <region>               AWS Region
  -p, --protego-account-id <id>       Protego Account ID
  -t, --protego-access-token <token>  Protego Token
  -o, --output [path]                 (optional) path to instrumented template file (default: current working directory)
  -f, --fsp-version <version>         (optional) FSP Version (default: latest)
  -q, --quiet                         (optional) quiet mode: output only the json output
  -v, --verbose                       (optional) verbose debug logs
  -h, --help                          output usage information

Example:

  ### with Options    
    protego fspSam -i path to SAM template -a AWS Account ID -R AWS Region -p Protego Account ID -t Protego Token 

  ### template only
    protego fspSam -i path to SAM template -a AWS Account ID -R AWS Region