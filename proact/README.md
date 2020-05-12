# **Functions scanner proact tool examples**

## Setup

#### cli tool plugin installation: 
`npm install -g https://artifactory.app.protego.io/cloudguard-serverless-plugin.tgz` 

( Note that plugin version might chnage , the most up-to-date version is listed at your cloudguard portal under integrations / CI-CD Integration and Deployment tab. )  


#### Token
In order to run the examples You will need to create a `cloudguard-config.json` file with the cloudguard details in it.
you can just login to the cloudguard ui and grab the api-token and secret from the settings -> credentials page.

#### Integrations
Cloudguard proact tool supports the following integrations:

* [cloudguard.yml](#cloudguardyml)
* [serverless](#serverless)
* [cloudformation](#cloudformation)
* [sam](#sam)
* [Azure pipelines](#azure-pipelines)

A full documentation of `cloudguard.yml` can be found [here](#cloudguardyml-template).


## cloudguard.yml
#### [basic](./cloudguard/basic/cloudguard.yml) :

```
cloudguard proact -i cloudguard/basic/cloudguard.yml
```

#### [global](./cloudguard/global/cloudguard.yml) :
With tags and global features override:

```
cloudguard proact -i cloudguard/global/cloudguard.yml
```

#### [function](./cloudguard/function/cloudguard.yml) :
With function skip and per function features override:

```
cloudguard proact -i cloudguard/function/cloudguard.yml
```

#### [layers](./cloudguard/layers/cloudguard.yml) :
A function with local defined layers:

```
cloudguard proact -i cloudguard/layers/cloudguard.yml
```

## serverless

First we need to install the cloudguard plugin
```
cd ./serverless
npm install
``` 

Note that you will need to copy the file `cloudguard-config.json` to every serverless examples directory you want to run.

#### [basic](./serverless/basic/serverless.yml) :

```
cd ./serverless/basic 
sls package
```

#### [global](./serverless/global/serverless.yml) :
With tags and global features override:
```
cd ./serverless/global 
sls package
```

#### [function](./serverless/function/serverless.yml) :
With function skip and per function features override:
```
cd ./serverless/function 
sls package
```

## cloudformation
we will use Cloudformation template to extract the functions properties.

In order to scan the functions code the tool will look for the `CodeLocation` property that points to the local path to the function code.
If the `CodeLocation` key is missing the tool will try to download the code from s3 location.


### With cloudguard.yml
The `cloudguard.yml` will point to the Cloudformation template file.

#### [basic](./cloudformation/basic/cloudguard.yml) :
```
cloudguard proact -i cloudformation/basic/cloudguard.yml
```

#### [global](./cloudformation/global/cloudguard.yml) :
yaml cloudformation with features override:

```
cloudguard proact -i cloudformation/global/cloudguard.yml
```

#### [parameters](./cloudformation/parameters/cloudguard.yml) :
With cloudformation parameters:

```
cloudguard proact -i cloudformation/parameters/cloudguard.yml
```

#### [function](./cloudformation/function/cloudguard.yml) :
With function properties override and job tags:

```
cloudguard proact -i cloudformation/function/cloudguard.yml
```

### Cloudformation template Only 

In this case we will add a `Cloudguard` section to the cloudformation template, under the `Metadata` block. 
This section can contain all the information as in a `cloudguard.yml` file.

#### [global](./cloudformation/cloudformation_only/global/cf.json) :
Note: To properly run this example change the bucket name and key to a real s3 location.
with features override in the cloudformation template:

```
cloudguard proact -C cloudformation/cloudformation_only/global/template.yaml
```

#### [function](./cloudformation/cloudformation_only/function/cf.json) :
with function properties override in the cloudformation template:

```
cloudguard proact -C cloudformation/cloudformation_only/function/cf.json
```


## sam
we will use Sam template to extract the functions and each function properties.
A additional `cloudguard.yml` is optional, will be used for overrides of features and function properties.

### With cloudguard.yml

`cloudguard.yml` will point to the sam template file. 

#### [basic](./sam/with_cloudguard/basic/cloudguard.yml) :
No need to specify the functions in the `cloudguard.yml` file

```
cloudguard proact -i sam/with_cloudguard/basic/cloudguard.yml
```

#### [parameters](./sam/with_cloudguard/parameters/cloudguard.yml) :
With Sam template parameters:

```cloudguard proact -i sam/with_cloudguard/parameters/cloudguard.yml```

#### [function](./sam/with_cloudguard/function/cloudguard.yml) :
With functions list and function properties override:

```cloudguard proact -i sam/with_cloudguard/function/cloudguard.yml```

#### [layers](./sam/with_cloudguard/layers/cloudguard.yml) :
A function with local and remote layers:

```cloudguard proact -i sam/with_cloudguard/layers/cloudguard.yml```

### Sam Only 

In this case we will add a `Cloudguard` section to the sam template. 
This section can contain all the sections and information as in a `cloudguard.yml` file.

#### [global](./sam/sam_only/global/template.yaml) :
with tags and features override in the sam template:

```
cloudguard proact -m sam/sam_only/global/template.yaml
```

#### [function](./sam/sam_only/function/template.yaml) :
with function properties override in the sam template:

```
cloudguard proact -m sam/sam_only/function/template.yaml
```

## Azure pipelines
We will use azure pipelines yaml file to extract the functions properties.

Cloudguard tool will parse only the `LambdaDeployFunction` tasks from the pipeline file.
in addition `cloudguard.yml` will point to the Azure pipelines file.

#### [basic](./azure-pipelines/basic/cloudguard.yml) :
Note: To properly run this example change the role ARN in `azure-pipelines.yml` to a real role ARN.
```
cloudguard proact -i azure-pipelines/basic/cloudguard.yml
```

#### [function](./azure-pipelines/function/cloudguard.yml) :
With additional functions and function properties override:

```
cloudguard proact -i azure-pipelines/function/cloudguard.yml
```

## Cloudguard.yml [Template](./cloudguard/template/cloudguard.yml)

The entire template of `cloudguard.yml` can be found here:

```cloudguard/template/cloudguard.yml```
