###### **Borg El Arab Technological University** 





##### **INTRODUCTION TO CYBER SECURITY** 

**1**<sup>**ST**</sup> **LEVEL– 1**<sup>**ST**</sup> **SEMESTER** 



<!-- Start of picture text -->
@ az WC)<br>ee as<br><—<br>: eee<br>e'<br><!-- End of picture text -->

**Dr. Hayman El-sayed** 

###### Chapter 2 

###### **Classical Encryption/Decryption Techniques** 

2 

###### **<mark>Definitions</mark>** 

###### **Data Security** 



<!-- Start of picture text -->
* Data is any type of stored digital information.<br>* The security of data means the protection of data.<br>CD drive<br>10110011101 Digital-to-analog<br>Linear amplifier<br>Digital data converter Analog<br>reproduction<br>of music audio<br>Speaker<br>signal<br>Sound<br>waves<br>3 a a d ))<br><!-- End of picture text -->

*** Digital Data** * Digital Data 

###### *** Digital Data** 

###### **Data Security** Data Securit 



<!-- Start of picture text -->
(a)A<br><!-- End of picture text -->



**Voice ,image, video** Voice ,image, video, **, and computer data** and computer data 



<!-- Start of picture text -->
P fotfo<br><!-- End of picture text -->



<!-- Start of picture text -->
‘\<br><!-- End of picture text -->

**4** 

#### **<mark>What is Cryptography ?</mark>** 

*** The word Cryptography comes from the Greek words** 

**Cryptography is the art of Secret writing** 

*** The basic service of cryptography is the ability to send information between participants in a way that prevents others from reading** 

**5** 

###### **Communication is the transfer of information from one point to another** 



<!-- Start of picture text -->
& No Data<br>Alice; security<br>Sender<br>. =<br>Hello Bob<br>><br>reno<br>Receiver<br>ner<br><!-- End of picture text -->

<mark>Data security : private communication in a public world</mark> 

**6** 

###### _<mark>Data Security</mark>_ 

*The sender puts the message in a box and locks the box by using a key; 

* The receiver unlocks the box with a key and takes out the message 



<!-- Start of picture text -->
sender<br><!-- End of picture text -->



<!-- Start of picture text -->
receiver<br><!-- End of picture text -->

**7** 

###### **Definitions** 

**Encipher (encrypt) : converting plain text to cipher text Decipher( decrypt): recovering cipher text from plain text Cryptography :** 

**study of encryption principles / methods Cryptanalysis (code breaking) : the study of principles / methods of deciphering cipher text with out knowing key** 

**8** 

###### **Definitions** 

**plaintext : the original message cipher text : the coded message Key :** 

**information used in cipher known only to sender /  receiver.** 

**Secret Key** 

- **Different keys** → **Different outputs,** 

*** using Substitutions and Transformations** 

**9** 

###### **Definitions** 

- ➢ **Encryption algorithm:** 

   - Performs substitutions, transformations on plaintext. 

   - **Input** : plaintext, key. 

   - **Output** : cipher text 

- ➢ **Decryption algorithm** 

   - Inverse of encryption algorithm. 

   - **Input** : cipher text, key. 

   - **Output** : plaintext 

**10** 

#### **Symmetric Cipher Model** 



<!-- Start of picture text -->
Secret key shared by Secret key shared hy<br>sender and recipient sender and recipient<br>Transmitted<br>=—— xX ciphertext —<br>=— > > - ==<br>=e Ys E(K,.X) X= DIK, ¥] =—<br>“ant: Encryption algorithm Decryption algorithm “ivet<br>e (e.g., AES) (reverse of encryption pu<br>algorithm)<br><!-- End of picture text -->

11 

#### **Types of Encryption :** 

1- Classical Encryption 

2- Modern Encryption 

**12** 

#### **<u>Symmetric   Encryption</u>** 

❑ **Created in 1970** 

- ❑ **Symmetric** 

   - ❑ Both sender and receiver are equivalent, 

   - ❑ either can encrypt or decrypt messages using the same key. 

❑ **Other names** 

- ❑ Classical 

- ❑ Conventional 

- ❑ Single-key encryption 

13 

#### **<u>Characterization</u>** 

- ❖ **Type of operations for transforming plaintext to cipher text:** 

   - ❑ **Substitution:** each element of plaintext is mapped to another element. 

   - ❑ **Transposition:** plaintext elements rearranged. 

   - ❑ **Product systems:** involve multiple stages of substitutions and transpositions 

- ❖ **Number of keys used** 

   - ❑ **Symmetric encryption:** both sender and receiver use the same key. 

   - ❑ **Asymmetric, or public-key encryption:** sender and receiver use 

different keys. 

14 

#### **<u>Classical Substitution Ciphers</u>** 

- Letters in plaintext is replaced by 

   - other letters 

   - numbers 

   - symbols 

15 

###### **<mark>Substitution Cipher Techniques</mark>** 

❑ Monoalphabetic Substitution Cipher ( Affine, Caesar, ROT13 , Atbash Cipher , Additive , Multiplicative )Cipher 

❑ Polyalphabetic Substitution Cipher (simple vigenere , full vigenere ) 

❑ PolyGram Substitution Cipher (play fair , Hill ) Cipher 

❑ Homophonic Substitution Cipher Transposition Matrix 

**16** 

Substitution ciphers Mono-alphabetic 

###### <mark>Caesar cipher</mark> 

**Caesar cipher is also called shift cipher** 

It’s a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number  positions down the alphabet 





<!-- Start of picture text -->
=<br>¥alll<br><!-- End of picture text -->



<!-- Start of picture text -->
ELDER<br>BOGHou<br><!-- End of picture text -->

**17** 

# **Cryptography example:** <mark>Se</mark> 



<!-- Start of picture text -->
Substitution Table - Caesar's Cipher<br>ga ogy PoE<br>=8 eyelic shits<br>DRFGHJKLIMOMRSTOTRYTRBC Key<br><!-- End of picture text -->

**Plain text : Data security Cipher text:** 

**Plain text : Ministry of Higher Education Cipher text:** 

**18** 

### <mark>Caesar cipher</mark> 

- **Ciphertext letter = plaintext letter + 3** 

- **Letters wrap around, Z is next after A** 

   - **`a b c d e f g h i j k l m n o p q r s t u v w x y z D E F G H I J K L M N O P Q R S T U V W X Y Z A B C`** 



19 

##### <mark>Caesar cipher</mark> 

The algorithm can be expressed as follows. For each plaintext letter p, substitute the cipher text letter C 

C = E(3, p) = (p + 3) mod 26 

A shift may be of any amount, so that the general Caesar algorithm is: 

**C = E(k, p) = (p + k) mod 26** 

- where k takes on a value in the range 1 to 25. 

- The decryption algorithm is simply 

**p = D(k, C) = (C - k) mod 26** 

**20** 



<!-- Start of picture text -->
Alice= Ff Bob=<br>—— oa | Cy ——<br>Plaintext 7 Ciphertext Plaintext<br>20<br><!-- End of picture text -->

#### **Caesar Cipher** 

###### • **Example** 



<!-- Start of picture text -->
plain: meet me after the toga party<br><!-- End of picture text -->



<!-- Start of picture text -->
ro fa p2)s3t«)>s)e«l|?7 |e }s |w|u pa<br>[a3 | 14 | as | a6 | a7 | as | a9 | 20 | 21 | 22 | 23 | 24 | 25 |<br><!-- End of picture text -->



<!-- Start of picture text -->
cipher: PHHW PH DIWHU WKH WRJD SDUWB<br><!-- End of picture text -->

21 

Encrypt the message "THIS IS AN EXERCISE" using a shift cipher with a key of 20. Ignore the space between words. Decrypt the message to get the original plaintext. 



<!-- Start of picture text -->
We can show the encryption character by character. We encode characters A to<br>Zas Oto 25. To wrap. we subtract 26.<br>T 19+ 20=39—-—26=13 > ~<br>H 07+ 20=|(27—26=—01 > B<br>I 0S + 20=— 28 — 26=—02 — oo<br>Ss 18+ 20=—38 — 26-12 > NI<br>I 0S + 20=— 28 — 26-02 — Cc<br>Ss 18+ 20=—38— 26-12 > a<br>A 00+ 20=20 — Uu<br>IN 13+ 20 =33—-—26=07 > H<br>E 04+ 20=24 > Y<br>x 23+ 20 = 43-26-17 > R<br>E 04+ 20=24 — Y<br>R 17+ 20=—37—26=11 > L<br>Cc 02+ 20=— 22 — Ww<br>I 0S + 20 = 28 — 26-02 — Cc<br>Ss 18+ 20=—38— 26-12 > a<br>E 04+ 20=24 — y<br>The encrypted message is NBCM CM UH YRYLWCMY.<br><!-- End of picture text -->

22 

The encrypted message is **_NBCM CM UH YRYLWCMY._** 



<!-- Start of picture text -->
We can show the decryption character by character. We encode characters A to<br>Zas Oto 25. To wrap the negative numbers. we add 26.<br>N 13 — 20 =—-07+ 26=19 => T<br>B 01 —20=-19+ 26=07 => H<br>Cc 02 —20=—18+ 26=08 > I<br>M 12 —-20=—08 + 26=18 > Ss<br>Cc 02 —20=-18+ 26=08 > I<br>M 12 —- 20 =—-08+ 26=18 => Ss<br>UC 20 —20=00 => A<br>H O7— 20=-13+26=13 => N<br>Y¥ 24 —20= 04 => E<br>R 17 — 20 =—03 + 26 = 23 > x<br>¥ 24 —20= 04 = E<br>L 11 — 20 =—09+ 26=17 => R<br>Ww 22 —20=02 => Cc<br>Cc 02 —20=-18+ 26=08 => I<br>M 12 — 20 =—-08 + 26=18 => Ss<br>Y 24 —20= 04 => E<br><!-- End of picture text -->

23 

## **Thank  you** 

24 

