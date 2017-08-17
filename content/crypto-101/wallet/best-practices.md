+++
title = "Best Practices"
date = 2017-08-02T17:15:06+02:00
description = ""
type = "doc"
weight = 20
draft = false
bref = ""
toc = true
+++

# Wallet : best practices

Handling digital currencies and their wallets comes with additional responsibilities in order to stay safe

## Set-up

We advise you to set up at least two wallets:

one hot wallet for daily expense that should not hold a huge chunk of your capital,
one cold wallet to store the rest of your cryptoassets.
Always use your hot wallet when transacting with the outside. We advise to make your cold wallet only interact with your own wallets for an extra layer of security.

Picture your hot wallet as your current account and cold wallet as your savings accounts

##### table

blabla


<div class="container">
  <div class="row">
    <div class="col">
     put a pic here
    </div>
    <div class="col">
      put a pic here
    </div>
    <div class="col">
      put a pic here
    </div>
  </div>
   <div class="row">
    <div class="col">
      Cold wallet = savings account
    </div>
    <div class="col">
      Hot wallet = current account
    </div>
    <div class="col">
      Online wallet = very short term storing
    </div>
  </div>
</div>



## Public address

Remember, a wallet can generate unlimited private keys and public addresses keys. (a wallet password does not need to be generate for each pairs). Because the blockchain is transparent, makes sure to never share a public address that has already been utilised with a third party.

It is important to generate a new public addresses for every transaction, otherwise the person you transact with will match the public address' balance with your identity.

### Infographie

One new address for each payment


### Encryption

The password is a core component to the safety of your assets in a wallet. Your password should include these features:

* length: minimum of 12 characters
* unique: should not be reused for other wallet or any login
* random: no meaning and with all types of characters

A good idea for extra security is to use Multiple Factor Authenticatio, an additional layer of protection for your account. There are three different authentication factors:  knowledge, possession or inherence. 
Under the 2-FA framework, you have to present to 2 components of authentication to access your account.
In most cases, a 2-FA encryption will work with a smartphone: you can access your wallet (or any encrypted account) only after entering successfully your password (knowledge) and insert a code generated from a mobile app

WARNING SMS-based 2-FA are not considered secure.

##### infographie


## Centralisation
### infographie
Never store all your wealth in one wallet – hot or cold. In general, it is suitable to avoid storing sensitive information in a single location.
Similarly, you do not want to store your back up and password next to your wallet

<div class="container">
  <div class="row">
    <div class="col">
     Exchange
    </div>
    <div class="col">
      Hot wallet
    </div>
    <div class="col">
      Cold wallet
    </div>
  </div>
   <div class="row">
    <div class="col">
    Exhanges hold your private keys. Therefore you only hold an IOU
    </div>
    <div class="col">
    Hot wallets are at the epicentre of your transaction management system
    </div>
    <div class="col">
    Cold wallets only interacts with hot wallets
    </div>
  </div>
</div>


## Back-up

### infographie

Never store all your wealth in one wallet – hot or cold. In general, it is suitable to avoid storing sensitive information in a single location.

Similarly, you do not want to store your back up and password next to your digital wallets


## Multisignature

Multi-sig addresses give the ability to share ownership of a public key between several users. In order to send coins out of the wallet, the transactions require all the keys of the involved users.

This feature can add an extra layer of protection if you want to share the wallet ownership without other partis. Very suitable for a family or a business account.
