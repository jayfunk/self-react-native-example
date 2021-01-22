README

    For this coding challenge, you will pair program with another developer and together you will create a simple feedback form in any language or framework of your choice. You are welcome to use any tools or resources at your disposal.

CONTENTS

    We have provided mockups (with redlines) of the expected UI that should serve as a guide for web. For mobile, please use the following InVision prototype: https://selfinc.invisionapp.com/overview/Eng-Frontend-Exercise---Mobile-ckfe0y4pv03jp013d3r6wezov/screens
    
    The assets folder contains the only images you will use for this exercise. In addition, we have packaged a lightweight express server in node that you can use to store and retrieve user ratings and comments.

REQUIREMENTS

    The form you will create has a star rating system between 0 and 10 stars, a comments box, and a submit type button. The user may submit the form without selecting any stars or entering any comments. When no stars are selected, a rating of 0 should be submitted to the server. After form submission, an NPS score should be calculated based on the existing ratings and rendered below the comments box.

NPS SCORE

    NPS stands for Net Promoter Score. Many companies use this number as their key happiness metric. 
    
    NPS is calculated as follows:
        NPS = Percentage Promoters - Percentage Detractors
    where,
        Detractors = Number of users that entered a rating of 6 or less
        Passives = Number of users that entered a rating of 7 or 8
        Promoters = Number of users that entered a rating of 9 or greater

    For instance, if you have 25% Promoters, 55% Passives, and 20% Detractors, the NPS will be +5. Note: NPS does not use the percent symbol.