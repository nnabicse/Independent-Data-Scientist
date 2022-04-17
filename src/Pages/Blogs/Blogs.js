import React from 'react';
import { Table } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='blogs-container'>
                <div className='blog'>
                    <div className='blog-header-container'><h1 className='blog-header'>Authorization VS Authentication</h1></div>
                    <div className='table-container'>
                        <Table bordered className='table'>
                            <thead className='thread'>
                                <tr>
                                    <th>Authorization</th>
                                    <th>Authentication</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>In authentication process, the identity of users are checked for providing the access to the system.</td>
                                    <td>In authentication process, the identity of users are checked for providing the access to the system.</td>
                                </tr>
                                <tr>
                                    <td>While in this process, users or persons are validated.</td>
                                    <td>In authentication process, users or persons are verified.</td>
                                </tr>
                                <tr>
                                    <td>While this process is done after the authentication process.</td>
                                    <td>In authentication process, users or persons are verified.</td>
                                </tr>
                                <tr>
                                    <td>While this process is done after the authentication process.</td>
                                    <td>While this process is done after the authentication process.</td>
                                </tr>
                                <tr>
                                    <td>While it determines What permission do user have?</td>
                                    <td>Authentication determines whether the person is user or not.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>
                <div className='blog'>
                    <div className='blog-header-container'><h1 className='blog-header'>Why are You Using Firebase?</h1></div>
                    <div>
                        <p>I'm using firebase for authentication and to host my website. Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more. There are definitely great advantages of using Firebase Authentication. Save time on developing Webservice methods for authentication : Instead, just have a method to store user information after the user authenticates with Firebase.</p>
                        <h5>Other Options to Implement Authentication</h5>
                        <ul>
                            <li>Auth0: Auth0 is an easy to implement, adaptable authentication and authorization platform.</li>
                            <li>Okta: Okta connects any person with any application on any device. It's an enterprise-grade, identity management service, built for the cloud, but compatible with many on-premises applications. With Okta, IT can manage any employee's access to any application or device.</li>
                            <li>Amazon Cognito: Amazon Cognito Federated Identities is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments.</li>
                            <li>Keucloak: Amazon Cognito Federated Identities is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments.</li>
                        </ul>
                    </div>
                </div>
                <div className='blog'>
                    <div className='blog-header-container'><h1 className='blog-header'>What are the Other Services Firebase Provides than Authentication?</h1></div>
                    <div>
                        <p>Firebase provides different kinds of services that help you to develop high-quality mobile and web applications. It is compatible with Web, iOS, Android, and OS X clients. With Firebase, developers don’t need to worry about the backend programming, Authentication, API development, database (real-time cloud-hosted NoSQL database and cloud firestore), File storage, etc. Firebase provides all the services with very efficient and fast performance.</p>
                        <h5>Services Provided by Firebase: </h5>
                        <ul>
                            <li>Hosting: Firebase Hosting provides fast and secure hosting for your web app, static and dynamic content, and microservices.</li>
                            <li>Cloud Storage: Firebase Cloud Storage is a modern technology that allows for storing and managing various media content generated by mobile app users. One of its biggest advantages is reliability. Firebase SDK for Cloud Storage works regardless of the network quality.</li>
                            <li>Cloud Messaging: Firebase is a great tool to implement notifications, irrespective of the platform because it is fast, reliable, and scalable to handle requests.</li>
                            <li>Google Analytics: Google Analytics for Firebase provides free, unlimited reporting on up to 500 distinct events. The SDK automatically captures certain key events and user properties, and you can define your own custom events to measure the things that uniquely matter to your business.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;


