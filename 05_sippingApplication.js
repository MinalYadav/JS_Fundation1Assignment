/*
    5.	You are building a shipping application.
    Write a program that takes the type of package ("standard", "express", or "overnight") and 
    uses a switch statement to calculate and print the estimated delivery time based on the package type. 
    For example,"standard" might take 3-5 days,"express" 1-2 days, and "overnight" would be delivered the next day.
*/
let packageType="overnight";
switch (packageType) {
    case "standard":
        console.log("it take 3-5 days to divliver your package")
        break;
    case "express":
        console.log("it take 1-2 days to divliver your package")
        break;
    case "overnight":
        console.log("package would be delivered the next day")
        break;

    default:
        console.log("package will be diliverd soon......")
        break;
}