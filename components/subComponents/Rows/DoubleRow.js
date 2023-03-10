/* eslint-disable react/no-find-dom-node */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { createElement } from "react";
import {
  useDiscoverMovie,
  useGetMovieImages,
  useTrendingList,
} from "../../../utils/hooksApi";
import { IMAGE_URL } from "../../../utils/config";
import YouTube from "react-youtube";

export default function DoubleRow({ title, pt, titleAlign, props }) {
  const [discoverData, setDiscoverData] = useState([]);
  const mappedArray = [];
  const dataMovie = useTrendingList();

  const [discoverDataImg, setDiscoverDataImg] = useState();
  const imgSearcher = useGetMovieImages();

  // Le imgSearcher?.length nous permet d'éviter l'erreur de undefined car n'ayant pas encore reçu les données dans le imgSearcher, ainsi nous pourrons les exploiter.
  // On aurrait pu faire aussi un optional chaining seulement, sans le .length
  useEffect(() => {
    // imgSearcher?.length ? setDiscoverDataImg(imgSearcher[0].data) : "";
    setDiscoverDataImg(imgSearcher);
  }, [imgSearcher]);
  // console.log(discoverDataImg);

  // Etudier les différentes synthaxe du useEffect pour voir s'il y a possibilité  de faire des assignments à l'intérieur
  useEffect(() => {
    dataMovie ? setDiscoverData(dataMovie) : "";
  }, [dataMovie]);
  // console.log(discoverData);

  let concated = [];
  concated = discoverData[0]?.data?.results.concat(
    discoverData[1]?.data.results,
    discoverData[2]?.data.results
  );
  // console.log("concated:", concated);

  for (let i = 0; i < concated?.length - 1; i += 2) {
    if (concated[i + 1] !== concated[i]) {
      mappedArray?.push([concated[i], concated[i + 1]]);
    }
  }
  // console.log(mappedArray);

  const videoOpts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      // loop: 1,
      // cc_load_policy: 0,
      // fs: 0,
      // iv_load_policy: 0,
      // modestbranding: 0,
    },
  };

  return (
    <div
      tabIndex={0}
      className={`u_collect double_row text-white pb-6` + ` ` + pt}
    >
      {/* display:> ytp-chrome-top (titre) ;;  .ytp-button (boutton central)  ;; ytp-watermark (lien vers yb ;; ytp-pause-overlay(suggestion fin vid)  */}
      <YouTube videoId="DlGIWM_e9vg" opts={videoOpts} />
      <div className="u_coll_container ">
        <div className="title_container mx-12 mb-2 leading-6">
          <div className="pe7 flex items-center">
            <div className="logo_container">
              <span>
                <img
                  className="pr-4"
                  src="\welcome\prime-logo-large-v4.png"
                  alt=""
                />
              </span>
            </div>
            <div
              className={
                `flexor flex justify-` + titleAlign + ` ` + `ml-0 w-full`
              }
            >
              <h2 className="text-[19px] leading-6 p-0 mr-3 font-bold ">
                {title}
              </h2>
              <a className="text-xs text-[#79b8f3] mt-[2px]" href="">
                Modifier
              </a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="card_carousel_container">
          <div className="">
            <ScrollingCarousel>
              {mappedArray?.map((double, id) => (
                <div key={id} className="double_card inline-block ">
                  <div className="cont_rev toXr relative block align-top ">
                    <div className="reveal ">
                      <div className="capsule w-full h-full">
                        <a href="">
                          <picture>
                            <img
                              className="object-cover w-full rounded-[3px] hover:rounded-none "
                              src={`${IMAGE_URL}/original${double[0]?.poster_path}`}
                              alt=""
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="desc relative">
                        <div className="w-full h-full">
                          <div className="my-3">
                            <div className="flex items-center justify-between">
                              <a
                                className="flex items-center shrink grow overflow-hidden text-xs "
                                href=""
                              >
                                <div className="grow-0 shrink-0 w-9 h-9  ">
                                  <img src="/welcome/play-3-32.png" alt="" />
                                </div>
                                <div className="flex flex-col overflow-hidden ">
                                  <span>Lecture</span>
                                  <div className="py-1 px-0">
                                    <div
                                      className="bg-[hsla(0,0%,100%,.2)] h-[3px] w-full max-w-[90px] absolute "
                                      role="progressbar"
                                    >
                                      <div className="w-[86%] bg-[#00a0d6] h-[3px] text- "></div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <div className="flex justify-around shrink grow text-xs cursor-default">
                                <div className="inline-block align-bottom cursor-default">
                                  <span className="relative cursor-pointer inline-block ">
                                    <img
                                      className="object-cover"
                                      src="/welcome/play-card-arrow-2.png"
                                      alt=""
                                    />
                                  </span>
                                </div>
                                <div className="inline-block  align-bottom cursor-default">
                                  <span className="relative cursor-pointer inline-block ">
                                    <img
                                      className="object-cover"
                                      src="/welcome/card-add-plus.png"
                                      alt=""
                                    />
                                  </span>
                                </div>
                                <div className="inline-block  align-bottom cursor-default">
                                  <span className="relative cursor-pointer inline-block ">
                                    <img
                                      className="object-cover"
                                      src="/welcome/remove-favorite.png"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="my-2">
                            <div className="text-[#00a8e1] text-sm font-bold ">
                              <span>Inclus avec Amazon Prime</span>
                            </div>
                          </div>
                          <div className="my-3">
                            <div>
                              <h3 className="block text-15 font-bold mb-1 ">
                                The Man In The High Castle
                              </h3>
                              <p className="card_resume">
                                Ce film minutieusement composé dissèque le
                                Troisième Reich avec une lâme aigue et
                                analytique tout en montrant la carrière insolite
                                de Hitler, sa maitrise de la psychologie de
                                masse, son génie manipulateur et séduisant.
                              </p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="mt-3 leading-6 whitespace-normal ">
                              <div className="film_duration inline-block text-[#f2f4f6] text-[12px] mr-4">
                                2h35min
                              </div>
                              <div className="film_date inline-block text-[#f2f4f6] text-[12px] mr-4">
                                1977
                              </div>
                              <div className="film_subtitles inline-block whitespace-nowrap mr-4 align-bottom ">
                                <span className="inline-block text-[#f2f4f6]">
                                  <img
                                    className="inline-block"
                                    src="/welcome/film-subs-4.png"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div className="film_age_limit inline-block whitespace-nowrap m-0">
                                <span className="inline-block text-[13px] ">
                                  <span className="flex justify-center items-center px-1 text-[#f2f4f6] border border-[#f2f4f6] leading-5">
                                    13 +
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cont_rev toXr relative block align-top ">
                    <div className="reveal ">
                      <div className="capsule w-full h-full">
                        <a href="">
                          <picture>
                            <img
                              className="object-cover w-full rounded-[3px] hover:rounded-none "
                              src={`${IMAGE_URL}/original${double[1]?.poster_path}`}
                              alt=""
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="desc relative">
                        <div className="w-full h-full">
                          <div className="my-3">
                            <div className="flex items-center justify-between">
                              <a
                                className="flex items-center shrink grow overflow-hidden text-xs "
                                href=""
                              >
                                <div className="grow-0 shrink-0 w-9 h-9  ">
                                  <img src="/welcome/play-3-32.png" alt="" />
                                </div>
                                <div className="flex flex-col overflow-hidden ">
                                  <span>Lecture</span>
                                  <div className="py-1 px-0">
                                    <div
                                      className="bg-[hsla(0,0%,100%,.2)] h-[3px] w-full max-w-[90px] absolute "
                                      role="progressbar"
                                    >
                                      <div className="w-[86%] bg-[#00a0d6] h-[3px] text- "></div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <div className="flex justify-around shrink grow text-xs cursor-default">
                                <div className="inline-block align-bottom cursor-default">
                                  <span className="relative cursor-pointer inline-block ">
                                    <img
                                      className="object-cover"
                                      src="/welcome/play-card-arrow-2.png"
                                      alt=""
                                    />
                                  </span>
                                </div>
                                <div className="inline-block  align-bottom cursor-default">
                                  <span className="relative cursor-pointer inline-block ">
                                    <img
                                      className="object-cover"
                                      src="/welcome/card-add-plus.png"
                                      alt=""
                                    />
                                  </span>
                                </div>
                                <div className="inline-block  align-bottom cursor-default">
                                  <span className="relative cursor-pointer inline-block ">
                                    <img
                                      className="object-cover"
                                      src="/welcome/remove-favorite.png"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="my-2">
                            <div className="text-[#00a8e1] text-sm font-bold ">
                              <span>Inclus avec Amazon Prime</span>
                            </div>
                          </div>
                          <div className="my-3">
                            <div>
                              <h3 className="block text-15 font-bold mb-1 ">
                                The Man In The High Castle
                              </h3>
                              <p className="card_resume">
                                Ce film minutieusement composé dissèque le
                                Troisième Reich avec une lâme aigue et
                                analytique tout en montrant la carrière insolite
                                de Hitler, sa maitrise de la psychologie de
                                masse, son génie manipulateur et séduisant.
                              </p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="mt-3 leading-6 whitespace-normal ">
                              <div className="film_duration inline-block text-[#f2f4f6] text-[12px] mr-4">
                                2h35min
                              </div>
                              <div className="film_date inline-block text-[#f2f4f6] text-[12px] mr-4">
                                1977
                              </div>
                              <div className="film_subtitles inline-block whitespace-nowrap mr-4 align-bottom ">
                                <span className="inline-block text-[#f2f4f6]">
                                  <img
                                    className="inline-block"
                                    src="/welcome/film-subs-4.png"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div className="film_age_limit inline-block whitespace-nowrap m-0">
                                <span className="inline-block text-[13px] ">
                                  <span className="flex justify-center items-center px-1 text-[#f2f4f6] border border-[#f2f4f6] leading-5">
                                    13 +
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollingCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
