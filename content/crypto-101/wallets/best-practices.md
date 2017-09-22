+++
title = "Best Practices"
date = 2017-08-02T17:15:06+02:00
description = "Bitcoins are stored in digital wallets, learn the basics of cryptography and the different types of wallets you can use."
draft = false
bref = "Wallets, Chapter II"
toc = true
+++

<blockquote>
<p>"In crypto, you're in control of your wealth, but this luxury comes with extra responsibilities."</p>
</blockquote>

## Set-up

We advise you to set up at least two wallets:

* One hot wallet for daily expenses, that should not hold a huge chunk of your capital.
* One cold wallet to store the rest of your crypto assets.

Always use your hot wallet when transacting with the outside. We advise you to make your cold wallet only interact with your own wallets for an extra layer of security.

Picture your hot wallet as your current account and cold wallet as your savings accounts.

<div class="container my-4">
  <div class="row text-center">
    <div class="col">
      {{< img src="crypto-101/icons/wallet-cold.svg" class="img-fluid" alt="Cold wallet" >}}
      <p class="font-weight-bold mt-2">Cold wallet</p>
      <p class="small text">Savings account</p>
    </div>
    <div class="col">
      {{< img src="crypto-101/icons/wallet-hot.svg" class="img-fluid" alt="Hot wallet" >}}
      <p class="font-weight-bold mt-2">Hot wallet</p>
      <p class="small text">Current account</p>
    </div>
    <div class="col">
      {{< img src="crypto-101/icons/wallet-online.svg" class="img-fluid" alt="Online wallet" >}}
      <p class="font-weight-bold mt-2">Online wallet</p>
      <p class="small text">Short term</p>
    </div>
  </div>
</div>

## Cryptography pair

A wallet can generate an unlimited amount of private key and public address combinations. However, a wallet (and its password) does not need to be generated for every pair.  
Because the blockchain is transparent, make sure to never share a public address that has already been shared with a third party.

It is important to generate new public addresses for every transaction; otherwise, the person you transact with will match the public address' balance with your identity.

{{< img src="crypto-101/infographics/info-wal2-1.png" class="img-fluid" alt="Public address single use" >}}

Since the blockchain tracks all transactions, sharing used public addresses for payment means sharing your account balance to a third party.

## Encryption

Setting up a wallet password is mandatory if you want to store your crypto safely. Be sure your password follows the below features:

* **Length**: minimum of 12 characters.
* **Unique**: never been used before.
* **Random**: no meaning and with all types of characters.

A good idea for extra security is to use Multiple Factor Authentication, an additional layer of protection for your account. There are three different authentication factors:  _knowledge_, _possession_ and _inherence_.  
Under the 2-FA framework, you have to present two components of authentication to access your account.  

In most cases, a 2-FA encryption will work with a smartphone: you can access your wallet (or any encrypted account) only after entering your password (knowledge) successfully and insert a code generated from a mobile app (possession).

**WARNING! SMS-based 2-FA is not considered safe, use certified applications.**

{{< img src="crypto-101/infographics/info-wal2-2.png" class="img-fluid" alt="Build digital vault" >}}

## Centralisation

It's best to avoid storing all of your money in one bank account : the same applies with crypto and wallets (hot or cold).  
Similarly, you do not want to keep your backup and password next to your wallet in case something happens.

It's best to set up several crypto transaction management systems like the below.

{{< img src="crypto-101/infographics/info-wal2-3.png" class="img-fluid" alt="Wallet like bank account" >}}

<div class="container my-4">
  <div class="row text-center">
    <div class="col">
      <p class="font-weight-bold mt-2">Cold wallet</p>
      <p class="small">Cold wallets only interact with your own hot wallets</p>
    </div>
    <div class="col">
      <p class="font-weight-bold mt-2">Hot wallet</p>
      <p class="small">Hot wallets are at the epicentre of your transaction management system</p>
    </div>
    <div class="col">
      <p class="font-weight-bold mt-2">Exchange</p>
      <p class="small">Exchanges hold your private keys. Therefore you only hold an IOU</p>
    </div>
  </div>
</div>

<div class="container my-4">
  <div class="row align-items-center">
    <div class="col col-sm-6 col-md-4 text-center">
      {{< img src="crypto-101/icons/back-up.svg" class="img-fluid" alt="Saving file" >}}
    </div>
    <div class="col col-sm-6 col-md-8 text-left">
      <h2>Back-up</h2>
      <p>In case your wallet gets deleted, corrupted, lost or mislaid, you will lose access to your private keys. It means you'll lose access to all of your crypto stored in your public addresses! </p>
      <p>Back up your wallet by making a copy of your private keys in case something happens to your system. Store them offline and somewhere safe.</p>
    </div>
  </div>
</div>

<div class="container my-4">
  <div class="row align-items-center">
    <div class="col col-sm-6 col-md-8 text-left">
    <h2>Multisignature</h2>
     <p>Multi-sig addresses give the ability to share ownership of a Bitcoin address between several users by having up to 15 associated private keys.</p>
     <p>In order to use coins out of the wallet, the transactions require signature from multiple key holders, sometimes all of them.</p>
     <p>This feature can add an extra layer of protection if you want to share the wallet ownership with other parties. Ideal for a family or a business account.</p>
    </div>
    <div class="col col-sm-6 col-md-4 text-center">
      {{< img src="crypto-101/icons/multi-sig.svg" class="img-fluid" alt="Multiple private keys" >}}
    </div>
  </div>
</div>
