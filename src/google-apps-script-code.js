
/**
 * Google Apps Script for handling form submissions from your website to Google Sheets
 * 
 * How to use:
 * 1. Go to https://script.google.com/ and create a new project
 * 2. Copy and paste this entire code into the editor
 * 3. Replace 'Contact Form Submissions' with your sheet name if it's different
 * 4. Click on Deploy > New deployment
 * 5. Select type as 'Web app'
 * 6. Set 'Who has access' to 'Anyone' (this allows your form to submit data)
 * 7. Click 'Deploy' and copy the Web app URL
 * 8. Replace the placeholder URL in your React component with this URL
 */

// Define the doPost function that will handle POST requests
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Format timestamp to Indian Standard Time (IST)
    const timestamp = formatToIndianTime(data.timestamp);
    
    // Open the spreadsheet by name
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Contact Form Submissions");
    
    // If the sheet doesn't exist, create it with headers
    if (!sheet) {
      const newSheet = ss.insertSheet("Contact Form Submissions");
      newSheet.appendRow(["Name", "Email", "Contact Number (optional)", "Message", "Timestamp"]);
      newSheet.setFrozenRows(1); // Freeze the header row
      
      // Add data to the new sheet
      newSheet.appendRow([
        data.name,
        data.email,
        data.contactNumber || "",  // Use empty string if contactNumber is not provided
        data.message,
        timestamp
      ]);
    } else {
      // Add data to the existing sheet
      sheet.appendRow([
        data.name,
        data.email,
        data.contactNumber || "",  // Use empty string if contactNumber is not provided
        data.message,
        timestamp
      ]);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Form submitted successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error and return an error response
    console.error("Error processing form submission:", error);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to convert UTC timestamp to Indian Standard Time (IST)
function formatToIndianTime(isoTimestamp) {
  const date = new Date(isoTimestamp);
  
  // Format to IST (UTC+5:30)
  // This adds 5 hours and 30 minutes to UTC time
  const istOptions = { 
    timeZone: 'Asia/Kolkata',
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: true
  };
  
  return date.toLocaleString('en-IN', istOptions);
}

// For handling CORS preflight requests (OPTIONS)
function doOptions() {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}
