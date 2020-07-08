const register = `
<form onsubmit="event.preventDefault();onFormSubmit();">
    <div>
        <label>First name</label>
        <input type="text" name="fname" id="fname">
    </div>
    <div>
        <label>Last name</label>
        <input type="text" name="lname" id="lname">
    </div>
    <div>
        <label>Date of birth</label>
        <input type="date" name="date" id="date">
    </div>
    <div>
        <label>Phone number</label>
        <input type="number" name="phone" id="phone">
    </div>
    <div>
        <label>E-mail</label>
        <input type="email" name="email" id="email">
    </div>
    <div>
        <label>Adress</label>
        <input type="text" name="adress" id="adress">
    </div>
    <div  class="form-action-buttons">
        <input type="submit" value="Submit">
    </div>
</form>

`;
