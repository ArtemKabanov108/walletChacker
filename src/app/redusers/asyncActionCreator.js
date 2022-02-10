import { createAsyncThunk } from "@reduxjs/toolkit";
import { NetworkType } from "@airgap/beacon-sdk";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";
const REACT_APP_URL = process?.env.REACT_APP_URL

const options = {
  name: "Test",
};

const rpcUrl = REACT_APP_URL;
const wallet = new BeaconWallet(options);

const getActiveAccount = async () => await wallet.client.getActiveAccount();

const requestPermissions = async () => {
  await wallet.requestPermissions({
    network: {
      type: NetworkType.MAINNET,
      rpcUrl,
    },
  });
};

const getDataWallet = async (addressWallet) => {
  try{
    const tezos = new TezosToolkit(rpcUrl);
    let balance = await tezos.tz.getBalance(addressWallet);
    return { addressWallet, balance: balance.toNumber() / 1000000 };
  } catch (err) {
    console.log(err)
  }
}

const connectWallet = async () => {
  try{
    await requestPermissions();
    let { address } = await getActiveAccount();
    return await getDataWallet(address)
  } catch (err) {
    console.log(err)
  }
};

export const fetchConnectWallet = createAsyncThunk(
    'wallet/fetchAll',
    async (_, thunkAPI) => {
        try {
            return await connectWallet()
        } catch (error) {
            return thunkAPI.rejectWithValue("Sorry the data not exist :(")
        }
    })

export const fetchDisConnectWallet = createAsyncThunk(
  'wallet/disconnect',
  async (_, thunkAPI) => {
    try {
      return await wallet.clearActiveAccount();
    } catch (error) {
      return thunkAPI.rejectWithValue("No Disconnect")
    }

  })