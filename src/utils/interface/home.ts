/*
Sanity Schema
Home Interface

[…] 1 item
0:{…} 8 properties
_type:home
header:Welcome to Arthek Studios
_id:1e50227e-2375-4ffe-8abc-dcf0d906235f
_updatedAt:2024-01-17T00:45:19Z
heroSection:{…} 3 properties
body:I am Benjamin, a passionate Ghanaian individual currently residing in the United Kingdom, pursuing my dreams in the exciting world of social media management and photography/videography.
title:Let's get to know about me closer
avatar:{…} 2 properties
_type:image
asset:{…} 2 properties
projectsHighlight:[…] 3 items
0:{…} 3 properties
_type:reference
_key:0b980c4c2f93
_ref:13e2d2f6-d6ec-4569-8080-0b41ac9575ac
1:{…} 3 properties
_type:reference
_key:9eddf4275adc
_ref:7a288e7c-0bfa-49d8-97fd-28059344c1fe
2:{…} 3 properties
_type:reference
_key:65350332f9ad
_ref:a6989cbe-1213-4f56-a562-c36239c722f3
_createdAt:2024-01-15T00:25:05Z
_rev:gSIb8asnYs8DeyFZkI9lO0

*/

import { ProjectInterface } from "./projects";

export interface HomeInterface {
    _type: "home";
    header: string;
    _id: string;
    _updatedAt: string;
    heroSection: {
        body: string;
        title: string;
        avatar: {
            _type: "image";
            asset: {
                _ref: string;
                _type: "reference";
            };
        };
    };
    projectsHighlight: ProjectInterface[];
    _createdAt: string;
    _rev: string;
    footer: {
        body: string;
        title: string;
        avatar: {
            _type: "image";
            asset: {
                _ref: string;
                _type: "reference";
            };
        };
    };
}