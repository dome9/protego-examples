# **Functions scanner proact tool examples**

## Setup

#### cli tool plugin installation: 
`npm install -g https://artifactory.app.protego.io/protego-serverless-plugin.tgz` 

( Note that plugin version might chnage , the most up-to-date version is listed at your protego portal under integrations / CI-CD Integration and Deployment tab. )  


#### Token
In order to run the examples You will need to create a `protego-config.json` file with the protego details in it.
you can just login to the protego ui and grab the config file from the integrations page.

#### Integrations
Protego proact tool supports the following integrations:

* [protego.yml](#protego-yml)
* [serverless](#serverless)
* [cloudformation](#cloudformation)
* [sam](#sam)
* [Azure pipelines](#azure-pipelines)

A full documentation of `protego.yml` can be found [here](#protego-yml-template).


## protego.yml
#### [basic](./protego/basic/protego.yml) :

```
protego proact -i protego/basic/protego.yml
```

#### [global](./protego/global/protego.yml) :
With tags and global features override:

```
protego proact -i protego/global/protego.yml
```

#### [function](./protego/function/protego.yml) :
With function skip and per function features override:

```
protego proact -i protego/function/protego.yml
```

#### [layers](./protego/layers/protego.yml) :
A function with local defined layers:

```
protego proact -i protego/layers/protego.yml
```

## serverless

First we need to install the protego plugin
```
cd ./serverless
npm install
``` 

Note that you will need to copy the file `protego-config.json` to every serverless examples directory you want to run.

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


### With protego.yml
The `protego.yml` will point to the Cloudformation template file.

#### [basic](./cloudformation/basic/protego.yml) :
```
protego proact -i cloudformation/basic/protego.yml
```

#### [global](./cloudformation/global/protego.yml) :
yaml cloudformation with features override:

```
protego proact -i cloudformation/global/protego.yml
```

#### [parameters](./cloudformation/parameters/protego.yml) :
With cloudformation parameters:

```
protego proact -i cloudformation/parameters/protego.yml
```

#### [function](./cloudformation/function/protego.yml) :
With function properties override and job tags:

```
protego proact -i cloudformation/function/protego.yml
```

### Cloudformation template Only 

In this case we will add a `Protego` section to the cloudformation template, under the `Metadata` block. 
This section can contain all the information as in a `protego.yml` file.

#### [global](./cloudformation/cloudformation_only/global/template.yaml) :
Note: To properly run this example change the bucket name and key to a real s3 location.
with features override in the cloudformation template:

```
protego proact -C cloudformation/cloudformation_only/global/template.yaml
```

#### [function](./cloudformation/cloudformation_only/function/cf.json) :
with function properties override in the cloudformation template:

```
protego proact -C cloudformation/cloudformation_only/function/cf.json
```


## sam
we will use Sam template to extract the functions and each function properties.
A additional `protego.yml` is optional, will be used for overrides of features and function properties.

### With protego.yml

`protego.yml` will point to the sam template file. 

#### [basic](./sam/with_protego/basic/protego.yml) :
No need to specify the functions in the `protego.yml` file

```
protego proact -i sam/with_protego/basic/protego.yml
```

#### [parameters](./sam/with_protego/parameters/protego.yml) :
With Sam template parameters:

```protego proact -i sam/with_protego/parameters/protego.yml```

#### [function](./sam/with_protego/function/protego.yml) :
With functions list and function properties override:

```protego proact -i sam/with_protego/function/protego.yml```

#### [layers](./sam/with_protego/layers/protego.yml) :
A function with local and remote layers:

```protego proact -i sam/with_protego/layers/protego.yml```

### Sam Only 

In this case we will add a `Protego` section to the sam template. 
This section can contain all the sections and information as in a `protego.yml` file.

#### [global](./sam/sam_only/global/template.yaml) :
with tags and features override in the sam template:

```
protego proact -m sam/sam_only/global/template.yaml
```

#### [function](./sam/sam_only/function/template.yaml) :
with function properties override in the sam template:

```
protego proact -m sam/sam_only/function/template.yaml
```

## Azure pipelines
We will use azure pipelines yaml file to extract the functions properties.

Protego tool will parse only the `LambdaDeployFunction` tasks from the pipeline file.
in addition `protego.yml` will point to the Azure pipelines file.

#### [basic](./azure-pipelines/basic/protego.yml) :
Note: To properly run this example change the role ARN in `azure-pipelines.yml` to a real role ARN.
```
protego proact -i azure-pipelines/basic/protego.yml
```

#### [function](./azure-pipelines/function/protego.yml) :
With additional functions and function properties override:

```
protego proact -i azure-pipelines/function/protego.yml
```

## Protego.yml [Template](./protego/template/protego.yml)

The entire template of `protego.yml` can be found here:

```protego/template/protego.yml```
