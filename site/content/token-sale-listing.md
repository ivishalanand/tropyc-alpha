+++
title = "Token Sale Listing"
description = "Submit the following form to get your token sale listed on Tropyc."
+++

<div class="w-75 mx-auto mb-5">
  <p>There are 3 application types available:</p>
  <ul>
    <li><strong>Regular Application (Free)</strong> - Application is added to the queue and processed in due time.</li>
    <li><strong>Priority Application ($50)</strong> - Application is fast-tracked and your token sale listed within 48 hours.</li>
    <li><strong>Premium Application ($300)</strong> - Priority Application with higher visibility (top of the browsing section and premium styling) during the whole duration of your token sale.</li>
  </ul>
</div>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <form action="https://formspree.io/tokensale@tropyc.co" method="POST" class="border rounded p-4">
        <div class="form-group">
          <label for="applicationType">Type of Application</label>
          <select name="applicationType" class="form-control" id="applicationType">
            <option>Regular Application (Free)</option>
            <option>Priority Application ($50)</option>
            <option>Premium Application ($300)</option>
          </select>
        </div>
        <div class="form-group">
          <label for="name">ICO Name</label>
          <input type="text" name="name" class="form-control form-control-sm" id="name" required>
        </div>
        <div class="form-group">
          <label for="blockchain">Blockchain</label>
          <input type="text" name="blockchain" class="form-control form-control-sm" id="blockchain" aria-describedby="blockchainHelp">
          <small id="blockchainHelp" class="form-text text-muted">i.e. Ethereum</small>
        </div>
        <div class="form-group">
          <label for="tokenType">Token Type</label>
          <input type="text" name="tokenType" class="form-control form-control-sm" id="tokenType" aria-describedby="tokenTypeHelp">
          <small id="tokenTypeHelp" class="form-text text-muted">i.e. ERC20</small>
        </div>
        <div class="form-group">
          <label for="ticker">Units Ticker</label>
          <input type="text" name="ticker" class="form-control form-control-sm" id="ticker">
        </div>
        <div class="form-group">
          <label for="premined">Units Pre-mined</label>
          <input type="number" name="premined" class="form-control form-control-sm" id="premined">
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
        <fieldset class="form-group">
          <label>Supply Type</label>
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
          <label for="industry">Industry</label>
          <input type="text" name="industry" class="form-control form-control-sm" id="industry" aria-describedby="industryHelp">
          <small id="industryHelp" class="form-text text-muted">i.e. Business services, Entertainment, Banking, Media...</small>
        </div>
        <div class="form-group">
          <label for="about">About</label>
          <textarea class="form-control form-control-sm" id="about" rows="6" placeholder="Tell us about your project"></textarea>
        </div>
        <div class="form-group">
          <label for="websiteUrl">Website URL</label>
          <input type="url" name="websiteUrl" class="form-control form-control-sm" id="websiteUrl" placeholder="https://website.com">
        </div>
        <div class="form-group">
          <label for="about">Social Media Links</label>
          <textarea class="form-control form-control-sm" id="about" rows="6" placeholder="URLs to Facebook, Twitter, Github..."></textarea>
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <input type="text" name="country" class="form-control form-control-sm" id="country">
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
