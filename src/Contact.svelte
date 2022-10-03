<style>
    .form-field input, .form-field textarea {
        margin: 15px 0px;
        padding: 10px;
        border: 1px solid var(--medium-teal);
        font-size: 24px;
        border-radius: 10px;
        max-width: 100%;

    }
    .form-field textarea {
        width: 90%;
    }
    .form-field input[type=submit] {
        background-color: rgb(191, 243, 249);
        width: 110px;
        margin: auto 0 auto auto;
    }
    .form-field label{
        font-size: 24px;
        display: block;
    }
    form {
        background-color: var(--purple);
        padding: 30px;
        border-radius: 2px;
        color: white;
    }
</style>
<div id="contact-us">
    <h3>Contact Us</h3>
    <form action="" method="get" class="form-example">
        <div class="form-field">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" required>
        </div>
        <div class="form-field">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" required>
        </div>
        <div class="form-field">
            <label for="message">Message</label>
            <textarea cols="40" rows="8" name="message" id="message"></textarea>
        </div>
        <div class="form-field">
          <input type="submit" value="Submit">
        </div>
      </form>
</div>