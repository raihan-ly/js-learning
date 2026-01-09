### Password Generation Rules (implemented in v2, and improvided in v3)

1. **Create arrays for each selected character set**  
   - `lowerCaseSet`  
   - `upperCaseSet`  
   - `numberSet`  
   - `symbolSet`

2. **For each selected set, choose at least one random character**  
   Add one guaranteed character from every enabled set to the password.

3. **Combine all allowed characters into one collection**  
   Build a single array/string containing every character from the selected sets.

4. **Fill the remaining password length using random characters**  
   Randomly select characters from the combined allowed collection until the desired length is reached.

5. **Shuffle the final password**  
   Randomize the order so guaranteed characters aren’t always at the beginning.
