+++
title = "Best practices"
date = 2017-08-02T17:15:06+02:00
description = "Bitcoins are stored in digital wallets, learn the basics of cryptography and the different types of wallets you can use."
draft = false
bref = "Wallets, Part II"
toc = true
+++

<blockquote class="blockquote my-5">
  <p>"In crypto, you're in control of your wealth, but this luxury comes with a security responsibility."</p>
</blockquote>

## Set-up

Managing crypto-wealth starts with setting up two wallets:

* One hot wallet for daily expenses, that should not hold a huge chunk of your capital.
* One cold wallet to store the rest of your crypto assets.

Hot wallets are the epicentre of wallet management system. They interact with both the outside world and offline storage. On the other hand, cold wallets should exclusively interact with hot wallets.

In personal finance, hot wallets are current accounts and cold wallets are savings accounts.

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
      <p class="small text">Purse</p>
    </div>
  </div>
</div>

## Cryptography pair

A wallet can generate an unlimited amount of private key and public address combinations. However, a wallet (and its password) does not need to be generated for every pair.  
Because the blockchain is transparent, one should avoid re-utilising a public address as its balance is available online.

It is important to generate new public addresses for every transaction; otherwise, the person you transact with will match the public address' balance with your identity.

{{< img src="crypto-101/infographics/info-wal2-1.png" class="img-fluid my-3" alt="Public address single use" >}}

Since the blockchain tracks all transactions, sharing used public addresses for payment means sharing your account balance to a third party.

## Encryption

Setting up a wallet password is mandatory if you want to store your crypto safely. Be sure your password follows the undermentioned:

* **Length**: minimum of 12 characters.
* **Unique**: never been used before.
* **Random**: no meaning and with all types of characters.

A good idea for extra security is to use Multiple Factor Authentication, an additional layer of protection for your account. There are three different authentication factors:  _knowledge_, _possession_ and _inherence_.  
Under the 2-FA framework, you have to present two components of authentication to access your account.  
In most cases, a 2-FA encryption will work with a smartphone: you can access your wallet (or any encrypted account) only after entering your password (knowledge) successfully and insert a code generated from a mobile app (possession).

**WARNING! SMS-based 2-FA is not considered safe, use only certified applications.**

{{< img src="crypto-101/infographics/info-wal2-2.png" class="img-fluid my-3" alt="Build digital vault" >}}

## Centralisation

It's best to avoid storing 100% of capital in one bank account, and the same applies with cryptocurrency.
You do not want to keep everything in one wallet or in one place.

{{< img src="crypto-101/infographics/info-wal2-3.png" class="img-fluid mt-3" alt="Wallet like bank account" >}}

<div class="container">
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
      <p>The security of a wallet is as good as the device that holds it. In other words, if the device is lost, corrupted or broken, there is no way out.It means you'll lose access to all of your crypto stored in your public addresses! </p>
      <p>Backing up a wallet (private keys) is a good idea to prevent any unnecessary loss. In many cases, access to private keys can be as easy as holding a pen drive in hand; henceforth threats also exist in the "physical world."</p>
    </div>
  </div>
</div>

<div class="container my-4">
  <div class="row align-items-center">
    <div class="col col-sm-6 col-md-8 text-left">
    <h2>Multi-signature</h2>
     <p>Multi-sig addresses give the ability to share ownership over a cryptocurrency wallet between several users.</p>
     <p>In order to use a wallet, transactions require signatures from multiple private key holders, depending on how it has been set up.</p>
     <p>This feature adds an extra layer of protection for cold storage.</p>
    </div>
    <div class="col col-sm-6 col-md-4 text-center">
      {{< img src="crypto-101/icons/multi-sig.svg" class="img-fluid" alt="Multiple private keys" >}}
    </div>
  </div>
</div>
