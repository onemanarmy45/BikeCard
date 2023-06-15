# BikeCard Project

The BikeCard project is a sample Salesforce application developed as part of the Trailhead learning platform. It provides a simple way to manage bike rental bookings and track customer information. This README file provides an overview of the project and instructions for setting it up and running it locally.

## Features

The BikeCard project offers the following features:

1. Bike Rental Booking: Users can create bike rental bookings, specifying the bike type, rental duration, and customer details.
2. Customer Management: The application allows users to create and manage customer records, including contact information and rental history.
3. Bike Inventory: Users can maintain an inventory of available bikes, including their types, quantities, and rental rates.

## Prerequisites

To run the BikeCard project locally, you need to have the following prerequisites installed:

1. Salesforce Developer Account: You will need a Salesforce Developer Account to create and deploy the project. You can sign up for a free account at [developer.salesforce.com](https://developer.salesforce.com/signup).
2. Salesforce CLI: Install the Salesforce Command Line Interface (CLI) by following the instructions at [developer.salesforce.com/tools/sfdxcli](https://developer.salesforce.com/tools/sfdxcli).
3. Git: Install Git version control system on your machine from [git-scm.com](https://git-scm.com/downloads).

## Installation

To install and set up the BikeCard project locally, follow these steps:

1. Clone the repository: Use the following command to clone the project repository to your local machine:
   ```
   git clone https://github.com/onemanarmy45/bikecard-project.git
   ```

2. Navigate to the project directory: Use the following command to navigate to the project directory:
   ```
   cd bikecard-project
   ```

3. Authenticate with Salesforce: Authenticate with your Salesforce Developer Account using the Salesforce CLI:
   ```
   sfdx force:auth:web:login -d -a mydevorg
   ```

4. Deploy the project: Use the following command to deploy the BikeCard project to your Salesforce org:
   ```
   sfdx force:source:deploy -p force-app
   ```

5. Open the application: Once the deployment is complete, open the Salesforce App Launcher in your org and search for "BikeCard" to access the application.

## Usage

The BikeCard application provides an intuitive user interface for managing bike rentals and customer information. You can use the application to perform the following tasks:

- Create a new bike rental booking by specifying the bike type, rental duration, and customer details.
- View and edit existing bike rental bookings.
- Manage customer records, including contact information and rental history.
- Maintain the inventory of available bikes, their types, quantities, and rental rates.

## Contributing

We welcome contributions to the BikeCard project. If you encounter any issues or have suggestions for improvement, please open an issue in the project's GitHub repository. You can also submit pull requests with proposed changes.

## License

The BikeCard project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Please refer to the `LICENSE` file for more details.

## Acknowledgements

The BikeCard project is based on the Trailhead project developed by Salesforce. We extend our gratitude to the Salesforce team for providing this educational resource.

---

Feel free to customize this README file based on your specific project requirements. Provide additional sections if necessary, such as a troubleshooting guide or deployment instructions for specific environments.
