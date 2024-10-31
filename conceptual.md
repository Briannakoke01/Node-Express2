### Conceptual Exercise

Answer the following questions below:

- What is a JWT? JSON Web Token, a secure compact URL-safe token format used to share claims between systems commonly used for auhtentification. 

- What is the signature portion of the JWT?  What does it do? cryptographic hash of the header and payload, signed with a secret key. It verifies the token's integrity ensuring that the payload hasnt been altered.

- If a JWT is intercepted, can the attacker see what's inside the payload? Yes if it is only signed but not encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level. In JWT-based authentication:

A user logs in and provides credentials (username and password).
The server verifies the credentials, then generates a JWT with a payload containing user information and returns it to the client.
The client stores the JWT (often in local storage or a cookie) and includes it in the Authorization header for each request.
The server validates the JWT on each request, checking the signature. If valid, it grants access based on the payload's user information.

- Compare and contrast unit, integration and end-to-end tests.
Unit Tests: Test individual functions or modules in isolation, ensuring each part works as expected independently. They are fast and provide precise feedback on the code's logic.

Integration Tests: Test the interaction between multiple units or components, verifying they work together as expected. They ensure data flows correctly between components but are slower than unit tests.

End-to-End (E2E) Tests: Test the application as a whole from the users perspective, simulating real user scenarios. These are the slowest but validate the complete workflow.

- What is a mock? What are some things you would mock? A mock is a simulated object that mimics the behavior of real objects in controlled ways during testing. Mocks replace real dependencies with test doubles, allowing testing in isolation. Common things to mock include database connections, external API calls, and third-party services.

- What is continuous integration? Continuous Integration (CI) is a development practice where code changes are frequently integrated into a shared repository and tested automatically, allowing teams to detect and address issues early. It often includes automated testing, ensuring new code doesn't break existing functionality.

- What is an environment variable and what are they used for? Environment variables are key-value pairs stored outside the codebase, often in .env files or on the server. They store configuration data, like API keys, database URLs, or debug flags, keeping sensitive information secure and allowing different configurations per environment (development, testing, production).

- What is TDD? What are some benefits and drawbacks?Test-Driven Development (TDD) is a practice where developers write tests before writing the code they are testing.

Benefits:

Ensures code is testable, helping prevent bugs.
Promotes better design and modular code.
Provides immediate feedback on functionality.
Drawbacks:

Slower initial development since tests are written before code.
May be challenging for complex systems or in rapidly changing requirements.


- What is the value of using JSONSchema for validation? JSONSchema provides a standardized way to validate JSON data structures. It ensures data consistency, making validation straightforward by specifying requirements like data types, formats, and required fields. JSONSchema validation can be easily reused and applied at various stages in the application.

- What are some ways to decide which code to test?
Prioritize testing:

Critical business logic to prevent major failures.
Complex code with conditional logic or edge cases.
Frequently used code paths to ensure core functionality.
Code handling user inputs to prevent errors and security vulnerabilities.
Less critical code (simple getters/setters) can be deprioritized if resources are limited.

- What does `RETURNING` do in SQL? When would you use it? In SQL, the RETURNING clause allows you to return rows affected by an INSERT, UPDATE, or DELETE statement. It’s useful when you need the new or modified data without making an additional query, such as getting an auto-generated ID immediately after inserting a new row.

- What are some differences between Web Sockets and HTTP?
Web Sockets: A bidirectional protocol allowing persistent, real-time communication between the client and server. Useful for applications needing frequent data updates (e.g., chat apps).

HTTP: A stateless, request-response protocol where the client initiates requests. Each connection is closed after the response, making it less efficient for real-time updates.

- Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)?This largely depends on the project’s needs. Flask is lightweight, easy to understand, and great for quickly setting up APIs, especially with Python’s ecosystem. Express, on the other hand, is more scalable for complex applications, offers extensive middleware, and is popular with Node.js, making it a go-to choice for full-stack JavaScript projects.

Ultimately, the preference may come down to the project context and familiarity with either language and ecosystem.







