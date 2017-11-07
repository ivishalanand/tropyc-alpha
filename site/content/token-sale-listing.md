+++
title = "Token Sale Listing"
description = "Submit the following form to get your token sale listed on Tropyc."
+++

<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <form action="https://formspree.io/tokensale@tropyc.co" method="POST" class="border rounded p-4">
        <h2 class="h3">Basics</h2>
        <div class="form-group">
          <label for="applicationType">Type of Application</label>
          <select name="applicationType" class="form-control" id="applicationType">
            <option>Regular - FREE</option>
            <option>Fast track 48h - $50</option>
            <option>1 Week high visibility - $100</option>
          </select>
        </div>
        <div class="form-group">
          <label for="name">ICO Name</label>
          <input type="text" name="name" class="form-control form-control-sm" id="name" required>
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <input type="text" name="country" class="form-control form-control-sm" id="country">
        </div>
        <div class="form-group">
          <label for="blockchainTokenType">Blockchain and token type</label>
          <input type="text" name="blockchainTokenType" class="form-control form-control-sm" id="blockchainTokenType" aria-describedby="blockchainTokenTypeHelp">
          <small id="blockchainTokenTypeHelp" class="form-text text-muted">i.e. Ethereum, ERC20</small>
        </div>
        <div class="form-group">
          <label for="industry">Industry</label>
          <input type="text" name="industry" class="form-control form-control-sm" id="industry" aria-describedby="industryHelp">
          <small id="industryHelp" class="form-text text-muted">i.e. Asset Managment, Attention Economy, Software, Banking, Media...</small>
        </div>
        <div class="form-group">
          <label for="about">About</label>
          <textarea class="form-control form-control-sm" id="about" rows="6" placeholder="Tell us about your project in 50 to 200 words"></textarea>
        </div>
        <hr class="my-5">
        <h2 class="h3">Distribution</h2>
        <div class="form-group">
          <label for="ticker">Units Ticker</label>
          <input type="text" name="ticker" class="form-control form-control-sm" id="ticker">
        </div>
        <fieldset class="form-group">
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="supplyType" id="supplyType" value="Varying Supply" checked>
              Varying Supply
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="supplyType" id="supplyType" value="Limited/Fixed Supply">
              Limited/Fixed Supply
            </label>
          </div>
        </fieldset>
        <div class="form-group">
          <label for="premined">Units Pre-mined</label>
          <input type="number" name="premined" class="form-control form-control-sm" id="premined" aria-describedby="preminedHelp">
          <small id="preminedHelp" class="form-text text-muted">If none, enter 0</small>
        </div>
        <div class="form-group">
          <label for="unitsSold">Units Sold</label>
          <input type="number" name="unitsSold" class="form-control form-control-sm" id="unitsSold" aria-describedby="unitsSoldHelp">
          <small id="unitsSoldHelp" class="form-text text-muted">Units sold during the sale. If unlimited, enter 0</small>
        </div>
        <div class="form-group">
          <label for="totalSupply">Total Units Supply</label>
          <input type="number" name="totalSupply" class="form-control form-control-sm" id="totalSupply" aria-describedby="totalSupplyHelp">
          <small id="totalSupplyHelp" class="form-text text-muted">If unlimited, enter 0</small>
        </div>
        <div class="form-group">
          <label for="pricePerUnit">Price per unit (without bonus)</label>
          <input type="number" name="pricePerUnit" class="form-control form-control-sm" id="pricePerUnit">
        </div>
        <div class="form-group">
          <label for="unitOfAccount">Unit of account</label>
          <input type="number" name="unitOfAccount" class="form-control form-control-sm" id="unitOfAccount" aria-describedby="unitOfAccountHelp">
          <small id="unitOfAccountHelp" class="form-text text-muted">i.e. USD, BTC, ETH...</small>
        </div>
        <hr class="my-5">
        <h2 class="h3">Links</h2>
        <div class="form-group">
          <label for="websiteUrl">Website URL</label>
          <input type="url" name="websiteUrl" class="form-control form-control-sm" id="websiteUrl" placeholder="https://website.com">
        </div>
        <div class="form-group">
          <label for="about">Social Media Links</label>
          <textarea class="form-control form-control-sm" id="about" rows="6" placeholder="URLs to Facebook, Twitter, Github..."></textarea>
        </div>
        <div class="form-group">
          <label for="email">Contact Email</label>
          <input type="email" name="_replyto" class="form-control form-control-sm" id="email" aria-describedby="emailHelp" required>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <input type="hidden" name="_subject" value="Token Sale Listing - New submission" />
        <button type="submit" class="btn btn-primary d-block mx-auto">Submit Application</button>
      </form>
    </div>
  </div>
</div>
