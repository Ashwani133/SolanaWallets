import React, { useState } from "react";
import { generateMnemonic, mnemonicToSeed } from "bip39";
import { Button } from "@/components/ui/button";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

const CreateWallets = () => {
  const [mnemonic, setMneonic] = useState("");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [publicKeys, setPublicKeys] = useState([]);

  const generateInitialMnemonic = async () => {
    const mn = generateMnemonic();
    setMneonic(mn);
  };

  const createSolanaWallets = async () => {
    const seed = await mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);
    const publicKeyEncoded = bs58.encode(keypair._keypair.publicKey);
    const privateKeyEncoded = bs58.encode(keypair._keypair.secretKey);
    setCurrentIndex(currentIndex + 1);
    setPublicKeys([...publicKeys, publicKeyEncoded]);
  };

  const generateFirstWallet = () => {
    generateInitialMnemonic();
    createSolanaWallets();
  };

  return (
    <div>
      {!mnemonic && (
        <Button onClick={() => generateFirstWallet()}>Generate Wallet</Button>
      )}
      {mnemonic && <Button onClick={createSolanaWallets}>Add Wallet</Button>}
      <div>
        {publicKeys &&
          publicKeys.map((pk, index) => <div key={index}>{pk}</div>)}
      </div>
    </div>
  );
};

export default CreateWallets;
