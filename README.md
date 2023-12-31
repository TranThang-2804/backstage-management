# Welcome to Tommy POC for Infra Self-Service Plugin for Backstage.

Please first of all, read through my presentation slides to understand what I'm trying to build to support self-service for IaC with Backstage which is highly
recomended.

## Who am I?
Hi, I'm ```Tommy```, I'm a ```team lead``` for the platform team, with many experiences with developing landing zone infrastructure platform that utilizes the ideology of ```self-service.``` I have successfully designed and implemented multiple of projects with this approach already, so I can foresee problems,
obstacles, and how to overcome them when building that type of platform. I confidently say that I'm quite an expert on this field.

## Introduction
This is a ```PoC``` for a ```Frontend``` and ```Backend``` plugin ```I wrote``` for supporting IaC self service for Backstage also with a way to manage IaC (Terraform or any others IaC tools)that is highly scalable, intuitive and should be align with Golden Path ideology. ```Backstage doesn't have this functionality yet```. Please bear in mind that this PoC I 
only did in under 2 days including researching so some of the frontend code is hard-coded (But I can make them a lot better if this solution is approved :D)

## Idea
The idea of this is to create a way to create IaC platform and make it available as self-service so Dev team can create resources freely without any help from the
DevOps team, the configuration for resources will be abstracted and only allows for certain types of configurations (For following security/platform/... constrains).

This will result in faster development process, less stress on our DevOps/Platform team -> Everyone is happy :D

![Overview Diagram](./images/Overview_Diagram.png)

## Explaination
This solution will spans across 2 repositories: 
1. This repository:<br>
This repository is for backstage development. Which I wrote 1 frontend plugin for the self-service portal and 1 backend plugin for handing logic and resource file
generation. The backend then will push the resource file to a sample IaC repository which is on another repository of mine (In point number 2) under automation branch.<br>
The frontend and backend plugin you can find them in this directory: ```tommy-backstage/plugins```

2. IaC sample repository:<br>
https://github.com/TranThang-2804/terraform-common<br>
This is a sample repository for a new way for managing IaC by separate them into 3 layers: [Data, Logic, Infra]<br>
I will use YAML files to manage resource configuration which is easy to understand and intuitive even for non-tech person. In reality, we will need to break IaC 
into multiple repository based on usecase/resource-types so it will be easier to manage.

## Fun fact
I forgot to ignore .DS_Store file in the .gitignore file and I was too lazy to remove them so please understand that for me :D many thanks.
