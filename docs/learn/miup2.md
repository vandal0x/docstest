---
sidebar_position: 5
displayed_sidebar: learnSidebar
---
import Figure from '../components/figure'

# Migrate Badge

## Introducing badge version migration 
All Noox badges are published to blockchain, therefore, if certain metadata needs to be revised, the publisher needs to re-publish the badge with the revised metadata.

There are a few instances when it is necessary for publishers to update the badge version.
- Case 1: If badge information is incorrect (e.g. incorrect contract address)
- Case 2: If projects add and/or migrate to a new smart contract (e.g. OpenSea’s decision to move from Wyvern to Seaport)

Protocols can make note of this version change and allow users to migrate to the new badge version. If a user chooses to migrate to a new badge version, the old version badge will be burned. In addition, upon the release of the new version, the old version will no longer be claimable. The migration process is free of charge except for the gas fee. 
<br class="in" />


## How Migration Works
Ukraine DAO Donator badge was updated to V2 to include a missing donate contract. 

![migrate1](/img/migrate1.png)

The ‘Migrate’ button can be found on the detail page of a badge. Make sure to click ‘Check Eligibility’ to see if you are eligible for a badge migration. 

![migrate2](/img/migrate2.png)

After clicking ‘Migrate’, you will need to confirm this transaction on your MetaMask for the process to be completed.

![migrate3](/img/migrate3.png)

Once the migration is completed, ‘Ukraine DAO Donator’ V1 badge will be burned and replaced with ‘Ukraine DAO Donator’ V2 badge.
