const register = `
<form class="form" onsubmit="event.preventDefault();onFormSubmit();">
    <div class="row">
        <label>First name</label>
        <input type="text" name="fname" id="fname" pattern="[a-zA-Z]+" required>
    </div>
    <div class="row">
        <label>Last name</label>
        <input type="text" name="lname" id="lname" pattern="[a-zA-Z]+" required>
    </div>
    <div class="row">
        <label>Date of birth</label>
        <input type="date" name="date" id="date" required>
    </div>
    <div class="row">
        <label>Phone number:</label>
        <label class="align-right">+370</label>
        <input type="text" 
                name="phone" 
                id="phone"
                placeholder="94358413"
                required 
                pattern="[0-9]{8}">
        <label class="hide" id="phoneValidation">phone number already exists</label>
    </div>
    <div class="row">
        
        <label>E-mail</label>
        <input type="email" 
                name="email" 
                id="email" 
                required>
        <label class="hide" id="emailValidation">email already exists</label>
    </div>
    <div class="row">
        <label>Adress</label>
        <input type="text" name="adress" id="adress">
    </div>
    <div  class="form-action-buttons row">
        <input type="submit" value="Submit" class="btn-submit">
    </div>
</form>

`;
