import React, { Suspense } from "react";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Effects,
  Loader,
  useTexture
} from "@react-three/drei";
import { LUTPass } from "three/examples/jsm/postprocessing/LUTPass";
import { LUTCubeLoader } from "three/examples/jsm/loaders/LUTCubeLoader";

extend({ LUTPass });
