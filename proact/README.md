# **Functions scanner proact tool examples**

## Setup

#### cli tool plugin installation: 
`npm install -g https://artifactory.app.protego.io/protego-serverless-plugin.tgz` . 

( Note that plugin version might chnage , the most up-to-date version is listed at your protego portal under integrations / CI-CD Integration and Deployment tab. )  


#### Token
In order to run the examples You will need to create a `protego-config.json` file with the protego.
you can just login to the ui and grab the config file from there.


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

The one thing that we **must** get from `protego.yml` is the `CodeLocation` for each function.
in addition `protego.yml` will point to the Cloudformation template file.

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

### Sam Only 

*[This mode is not published yet]*

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

## Protego.yml [Template](./protego/template/protego.yml)

The entire template of `protego.yml` can be found here:

```protego/template/protego.yml```
