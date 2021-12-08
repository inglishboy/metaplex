import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PublicKey } from '@solana/web3.js';

import { Providers } from './providers';
import { AdminView } from './views/admin';
import { FireballView} from "./views/fireballView";

export function Routes() {
  const ingredients = {
    "airplane"           : "https://www.arweave.net/84UaRlQ7lIM6rjGodFsruqNNAoOBt6dBoJ-eHv9Fr50?ext=gif",
    "bull"               : "https://www.arweave.net/GfSyYWWgOIY3llKsU9CiR_sUKNlIBaE1-Wnx_JgvaC4?ext=gif",
    "duck with doughnut" : "https://www.arweave.net/4M30mRpOwq9M1DrlMAUipUAaAPsCeMLm8gTSDXo_rmI?ext=gif",
    "hot air balloon"    : "https://www.arweave.net/_mNWVadW1eA5Be3qJlDJeY5qc5tcfL0VdwJ7mc2oxgU?ext=gif",
    "house"              : "https://www.arweave.net/StFWkC5bN_vMuY6oluIlJbFMPsCL-6Q93aVCobrA_mM?ext=gif",
    "normal duck"        : "https://www.arweave.net/PJySMI3c2s-DFvJ_ruRrCScsNJiUDiJsu9J6haeWaww?ext=gif",
    "rocket"             : "https://www.arweave.net/tWQYjhOarxQbQvF9eGRUnI3S-vaWd8Qj7ag7CmiVRqk?ext=gif",
    "sailboat"           : "https://www.arweave.net/RIkpf6zSCcFLi6KetJrnwd5feZdlVc9-5E37n58D_H4?ext=gif",
    "telescope ape"      : "https://www.arweave.net/yxWPmiQY3OBHLn1kWhDOrvuJMNAbkglI3VzrL8xZk1Y?ext=gif",
    "traincar"           : "https://www.arweave.net/mt_fveAydzly6mEeAUNxDuAWevIe9NPoxBuPoTCDIYY?ext=gif",
    "ufo"                : "https://www.arweave.net/RNdstwUgOcXc7ognVkUoTjfoO2B3Kp2iZ34m86x6gzw?ext=gif",
    "umbrella duck"      : "https://www.arweave.net/-ApXoK_X3rlclU-rijXiqU4pm85tggLej4ax3HwsI3U?ext=gif",
    "whale"              : "https://www.arweave.net/e0VvxBG4VrAmli9v7E0d_JDxqbXohS50D7oExbtzVkg?ext=gif",
  };

  const cityYields = [
    {
      image: "https://4udejsogpoo3ekjmiigzgcgzyebntokt6oqavvw5vsv77xpvp5eq.arweave.net/5QZEycZ7nbIpLEINkwjZwQLZuVPzoArW3ayr_931f0k/?ext=gif",
      name: "red moon city",
      mint: new PublicKey("2gFFVAaFQe36FTBevz2cQHivXUfPse53dBSN65e96HND"),
    },
    {
      image: "https://pvibl5h2u52szj5hq5h4pselyzhjsckz53oziusek2insn4f75va.arweave.net/fVAV9PqndSynp4dPx8iLxk6ZCVnu3ZRSRFaQ2TeF_2o/?ext=gif",
      name: "blue moon beach",
      mint: new PublicKey("9vpjkWrc4GSW98HgrTZaknHKtxdrx7Cq6P6is4A7uwE1"),
    },
    {
      image: "https://u2pr74tvgu2uxgvscxk22my5b6o5esatoqgcv5npyfaaef37tv3a.arweave.net/pp8f8nU1NUuashXVrTMdD53SSBN0DCr1r8FAAhd_nXY/?ext=gif",
      name: "once in a solana moon",
      mint: new PublicKey("ENSkFqG4unsRq6bFa17vngQ8rfxsVdcvJJijyHdFi2XQ"),
    },
  ];

  return (
    <>
      <BrowserRouter basename={'/'}>
        <Providers>
          <Switch>
            <Route path="/collectoooooor" component={
              () => (
                <FireballView
                  recipeKey={new PublicKey("HHNbiYDEAJ2PXv5GZXXrn2Ypi1s8CfZK4asgnpg6MSUi")}
                  recipeYields={cityYields}
                  ingredients={ingredients}
                />
              )
            } />
          </Switch>
        </Providers>
      </BrowserRouter>
    </>
  );
}
