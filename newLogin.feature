
Feature: Login
    Scenario Outline: test
        When user is on home page
        Then user verifies <element>
        Then user checks in

        Examples:

            | element |
            | button  |
            | input   |