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
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="startDate">Start date</label>
              <input type="date" name="startDate" class="form-control form-control-sm" id="startDate" required>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="endDate">End date</label>
              <input type="date" name="endDate" class="form-control form-control-sm" id="endDate" required>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <input type="text" name="country" class="form-control form-control-sm" id="country">
        </div>
        <div class="form-group">
          <label for="blockchainTokenType">Blockchain and token type</label>
          <input type="text" name="blockchainTokenType" class="form-control form-control-sm" id="blockchainTokenType" aria-describedby="blockchainTokenTypeHelp">
          <small id="blockchainTokenTypeHelp" class="form-text text-muted">i.e. Native, Ethereum ERC20, NEO, Waves</small>
        </div>
        <div class="form-group">
          <label for="industry">Industry</label>
          <input type="text" name="industry" class="form-control form-control-sm" id="industry" aria-describedby="industryHelp">
          <small id="industryHelp" class="form-text text-muted">i.e. Asset managment, Attention economy, Software, Media...</small>
        </div>
        <div class="form-group">
          <label for="about">About</label>
          <textarea name="about" class="form-control form-control-sm" id="about" rows="6" placeholder="Tell us about your project in 50 to 200 words"></textarea>
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
              <input class="form-check-input" type="radio" name="supplyType" id="supplyType" value="Varying total supply" checked>
              Varying total supply
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="supplyType" id="supplyType" value="Limited/fixed total supply">
              Limited/fixed total supply
            </label>
          </div>
        </fieldset>
        <div class="form-group">
          <label for="distribution">Distribution</label>
          <textarea name="distribution" class="form-control form-control-sm" id="distribution" rows="6" placeholder="Detail your unit distribution, i.e. &#10; - Pre-ICO = 10,000,000 &#10; - ICO = 50,000,000 &#10; - Founders = 10,000,000 &#10; - ..."></textarea>
        </div>
        <div class="form-group">
          <label for="hardCap">Hard cap of the sale</label>
          <input type="text" name="hardCap" class="form-control form-control-sm" id="hardCap" aria-describedby="hardCapHelp" placeholder="$20,000,000 or 60,000 ETH">
          <small id="hardCapHelp" class="form-text text-muted">This is the hardcap on the ICO and not the hardcap on the token total supply</small>
        </div>
        <hr class="my-5">
        <h2 class="h3">Links</h2>
        <div class="form-group">
          <label for="websiteUrl">Website URL</label>
          <input type="url" name="websiteUrl" class="form-control form-control-sm" id="websiteUrl" placeholder="https://website.com">
        </div>
        <div class="form-group">
          <label for="socialLinks">Social Media Links</label>
          <textarea name="socialLinks" class="form-control form-control-sm" id="socialLinks" rows="6" placeholder="URLs to Facebook, Twitter, Github..."></textarea>
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
