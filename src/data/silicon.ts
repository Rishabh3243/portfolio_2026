export type SiliconCategory = 'SOC' | 'SBC' | 'SOM' | 'SENSORS' | 'MCU';
export type SocSubcategory = 'all' | 'cpu' | 'gpu' | 'npu';

export interface ComputeBlock {
  title: string;
  spec: string;
  image: string;
}

export interface SocArchitecture {
  cpu: ComputeBlock;
  gpu: ComputeBlock;
  npu: ComputeBlock;
}

export interface HardwareProfile {
  id: string;
  name: string;
  vendor: string;
  category: SiliconCategory;
  socType?: 'cpu' | 'gpu' | 'npu';
  image: string;
  architecture: string;
  runtimes: string[];
  role: string;
  highlight: string;
  badge: string;
  powerDraw?: string;
  interfaces?: string[];
  socBlocks?: SocArchitecture;
}

export interface SiliconCategoryMeta {
  id: SiliconCategory;
  name: string;
  tagline: string;
  image: string;
}

export interface SocSubcategoryMeta {
  id: SocSubcategory;
  label: string;
  image: string;
}

export const siliconCategories: SiliconCategoryMeta[] = [
  {
    id: 'SOC',
    name: 'SOC',
    tagline: 'System on Chip',
    image: '/images/silicon/cat-soc.svg',
  },
  {
    id: 'SBC',
    name: 'SBC',
    tagline: 'Single Board Computer',
    image: '/images/silicon/cat-sbc.svg',
  },
  {
    id: 'SOM',
    name: 'SOM',
    tagline: 'System on Module',
    image: '/images/silicon/cat-som.svg',
  },
  {
    id: 'SENSORS',
    name: 'SENSORS',
    tagline: 'Vision & AI Sensors',
    image: '/images/silicon/cat-sensors.svg',
  },
  {
    id: 'MCU',
    name: 'MCU',
    tagline: 'Microcontrollers',
    image: '/images/silicon/cat-mcu.svg',
  },
];

export const socSubcategories: SocSubcategoryMeta[] = [
  {
    id: 'all',
    label: 'All SOCs',
    image: '/images/silicon/cat-soc.svg',
  },
  {
    id: 'cpu',
    label: 'CPU',
    image: '/images/silicon/cpu-core.svg',
  },
  {
    id: 'gpu',
    label: 'GPU',
    image: '/images/silicon/gpu-core.svg',
  },
  {
    id: 'npu',
    label: 'NPU',
    image: '/images/silicon/npu-core.svg',
  },
];

export const hardwareProfiles: HardwareProfile[] = [
  // ==================== SOC (System on Chip) ====================
  {
    id: 'nvidia-jetson-orin',
    name: 'Jetson Orin Nano / AGX',
    vendor: 'NVIDIA',
    category: 'SOC',
    socType: 'gpu',
    image: '/images/silicon/jetson-orin.svg',
    architecture: 'Ampere GPU (1024 CUDA + 32 Tensor Cores) + 6-Core Arm Cortex-A78AE',
    runtimes: ['TensorRT', 'DeepStream', 'CUDA', 'cuDNN'],
    role: 'Multi-camera 4K industrial vision, object detection & segmentation',
    highlight: 'TensorRT FP16/INT8 with real-time multi-stream RTSP decoding & zero drops',
    badge: '40 TOPS GPU',
    powerDraw: '7W – 25W',
    interfaces: ['MIPI CSI-2', 'PCIe Gen4', 'Gigabit Eth', 'USB 3.2'],
    socBlocks: {
      cpu: {
        title: 'Host CPU',
        spec: '6-Core Arm Cortex-A78AE @ 1.5 GHz',
        image: '/images/silicon/cpu-core.svg',
      },
      gpu: {
        title: 'Ampere GPU',
        spec: '1024 CUDA Cores + 32 Tensor Cores',
        image: '/images/silicon/gpu-core.svg',
      },
      npu: {
        title: 'Deep Learning',
        spec: 'Dual DLA v2 Acceleration Engines',
        image: '/images/silicon/npu-core.svg',
      },
    },
  },
  {
    id: 'nxp-imx8m-plus',
    name: 'i.MX 8M Plus',
    vendor: 'NXP',
    category: 'SOC',
    socType: 'npu',
    image: '/images/silicon/imx8m-plus.svg',
    architecture: 'Quad Arm Cortex-A53 + 2.3 TOPS NPU + GC7000UL 3D GPU',
    runtimes: ['eIQ Toolkit', 'TFLite', 'ARM NN', 'ONNX'],
    role: 'Low-power industrial IoT, smart retail vision & automotive monitoring',
    highlight: 'Achieved 50% memory drop via eIQ weight pruning & INT8 calibration',
    badge: '2.3 TOPS NPU',
    powerDraw: '2.5W – 5W',
    interfaces: ['Dual MIPI CSI', 'Dual GbE (TSN)', 'CAN-FD', 'USB 3.0'],
    socBlocks: {
      cpu: {
        title: 'Host CPU',
        spec: '4x Arm Cortex-A53 @ 1.8 GHz + Cortex-M7',
        image: '/images/silicon/cpu-core.svg',
      },
      gpu: {
        title: '3D GPU',
        spec: 'Vivante GC7000UL 2D/3D Engine',
        image: '/images/silicon/gpu-core.svg',
      },
      npu: {
        title: 'Vision NPU',
        spec: '2.3 TOPS Neural Processing Unit',
        image: '/images/silicon/npu-core.svg',
      },
    },
  },
  {
    id: 'rockchip-rk3588',
    name: 'RK3588 Octa-Core',
    vendor: 'Rockchip',
    category: 'SOC',
    socType: 'npu',
    image: '/images/silicon/rk3588.svg',
    architecture: 'Octa-core 64-bit (4x A76 + 4x A55) + 6.0 TOPS Tri-Core NPU',
    runtimes: ['RKNN Toolkit 2', 'RKNN-RT', 'OpenCV', 'C++ API'],
    role: 'Multi-channel 8K/4K edge video analytics & smart city camera arrays',
    highlight: 'Deployed custom YOLOv8 models at sustained 60 FPS with zero frame drops',
    badge: '6.0 TOPS NPU',
    powerDraw: '6W – 12W',
    interfaces: ['Quad MIPI CSI', 'Dual HDMI 2.1 (8K)', 'PCIe 3.0', '2.5GbE'],
    socBlocks: {
      cpu: {
        title: 'DynamIQ CPU',
        spec: '4x Cortex-A76 (2.4GHz) + 4x Cortex-A55',
        image: '/images/silicon/cpu-core.svg',
      },
      gpu: {
        title: 'Mali GPU',
        spec: 'ARM Mali-G610 MP4 Quad-Core',
        image: '/images/silicon/gpu-core.svg',
      },
      npu: {
        title: 'Tri-Core NPU',
        spec: '6.0 TOPS NPU (INT4/INT8/INT16)',
        image: '/images/silicon/npu-core.svg',
      },
    },
  },
  {
    id: 'axelera-metis-soc',
    name: 'Metis® AIPU',
    vendor: 'Axelera AI',
    category: 'SOC',
    socType: 'npu',
    image: '/images/silicon/metis-aipu.svg',
    architecture: 'Digital In-Memory Computing (D-IMC) Core • Up to 214 TOPS Peak INT8',
    runtimes: ['Voyager SDK', 'ONNX Runtime', 'PyTorch PTQ'],
    role: 'High-efficiency multi-camera vision, detection & segmentation at 15 TOPS/Watt',
    highlight: 'Showcased at CES, Embedded World & EuroShop with custom edge models',
    badge: '214 TOPS AIPU',
    powerDraw: '10W – 25W',
    interfaces: ['PCIe Gen3 x4', 'M.2 Key M'],
    socBlocks: {
      cpu: {
        title: 'Host Control',
        spec: 'Quad 64-bit RISC-V Controller Cluster',
        image: '/images/silicon/cpu-core.svg',
      },
      gpu: {
        title: 'Vector Engine',
        spec: 'Hardware Vector Activation Co-Engine',
        image: '/images/silicon/gpu-core.svg',
      },
      npu: {
        title: 'D-IMC Engine',
        spec: '4x In-Memory Neural Engines (214 TOPS INT8)',
        image: '/images/silicon/npu-core.svg',
      },
    },
  },
  {
    id: 'deepx-dxm1',
    name: 'DeepX DX-M1 SoC',
    vendor: 'DeepX / Deeper-i',
    category: 'SOC',
    socType: 'npu',
    image: '/images/silicon/deepx-dxm1.svg',
    architecture: 'Sub-5W Edge AI NPU delivering up to 25 TOPS for vision analytics',
    runtimes: ['DeepX SDK', 'FastAPI', 'OpenCV'],
    role: 'Real-time vehicle detection & parking spot occupancy monitoring',
    highlight: 'Exhibited live at Japan IT Week with sub-15ms inference latency',
    badge: '25 TOPS NPU',
    powerDraw: '< 5W',
    interfaces: ['MIPI CSI', 'USB 3.0', 'Ethernet'],
    socBlocks: {
      cpu: {
        title: 'Control Cores',
        spec: 'Dual ARM Cortex-A Embedded Subsystem',
        image: '/images/silicon/cpu-core.svg',
      },
      gpu: {
        title: 'Hardware ISP',
        spec: 'Zero-copy Bayer color space conversion',
        image: '/images/silicon/gpu-core.svg',
      },
      npu: {
        title: 'Vision NPU',
        spec: 'DeepX Vision NPU Engine (< 15ms YOLO)',
        image: '/images/silicon/npu-core.svg',
      },
    },
  },
  {
    id: 'broadcom-bcm2712',
    name: 'BCM2712 Quad A76',
    vendor: 'Broadcom',
    category: 'SOC',
    socType: 'cpu',
    image: '/images/silicon/bcm2712.svg',
    architecture: 'Quad-core Arm Cortex-A76 @ 2.4 GHz + VideoCore VII 3D GPU',
    runtimes: ['TFLite', 'ONNX Runtime (CPU)', 'OpenCV DNN'],
    role: 'High-frequency CPU edge inference for lightweight vision & OCR',
    highlight: '2.5x throughput gain over prior generation via multi-threaded CPU runtime',
    badge: '2.4 GHz Quad CPU',
    powerDraw: '5W – 10W',
    interfaces: ['PCIe 2.0', 'Dual MIPI CSI', 'Gigabit Eth', 'USB 3.0'],
    socBlocks: {
      cpu: {
        title: 'Host CPU',
        spec: '4x Arm Cortex-A76 @ 2.4 GHz (512KB L2/core)',
        image: '/images/silicon/cpu-core.svg',
      },
      gpu: {
        title: 'VideoCore VII',
        spec: 'Broadcom VideoCore VII @ 800 MHz',
        image: '/images/silicon/gpu-core.svg',
      },
      npu: {
        title: 'NEON SIMD',
        spec: 'Quad 128-bit Vector SIMD Engines',
        image: '/images/silicon/npu-core.svg',
      },
    },
  },

  // ==================== SBC (Single Board Computers) ====================
  {
    id: 'raspberry-pi-5-sbc',
    name: 'Raspberry Pi 5',
    vendor: 'Raspberry Pi Ltd',
    category: 'SBC',
    image: '/images/silicon/raspberry-pi-5.svg',
    architecture: 'BCM2712 Quad A76 @ 2.4GHz + PCIe 2.0 AI HAT connector',
    runtimes: ['TFLite', 'ONNX Runtime', 'Hailo-8L SDK', 'OpenCV'],
    role: 'Rapid vision prototyping & edge kiosk workloads',
    highlight: 'Paired with Hailo-8L AI HAT for 13 TOPS vision at 60 FPS',
    badge: 'AI HAT Ready',
    powerDraw: '5W – 12W',
    interfaces: ['PCIe 2.0 M.2', 'Dual MIPI CSI', 'Dual 4K HDMI', 'GbE'],
  },
  {
    id: 'jetson-dev-kit-sbc',
    name: 'Jetson Orin Dev Kit',
    vendor: 'NVIDIA',
    category: 'SBC',
    image: '/images/silicon/jetson-dev-kit.svg',
    architecture: 'Orin Nano SOM + Carrier Board + Dual M.2 Key M slots',
    runtimes: ['JetPack 6', 'TensorRT', 'DeepStream SDK', 'Isaac ROS'],
    role: 'Robotics, multi-stream video hubs & autonomous edge nodes',
    highlight: 'Dual MIPI-CSI camera ingestion with hardware GStreamer decoding',
    badge: 'Robotics DevKit',
    powerDraw: '7W – 15W',
    interfaces: ['Dual MIPI CSI-2', 'M.2 NVMe', 'DisplayPort', 'GbE'],
  },
  {
    id: 'radxa-rock5b-sbc',
    name: 'Radxa ROCK 5B',
    vendor: 'Radxa',
    category: 'SBC',
    image: '/images/silicon/radxa-rock5b.svg',
    architecture: 'Rockchip RK3588 + 16GB RAM + 6.0 TOPS NPU + 2.5GbE',
    runtimes: ['RKNN Toolkit 2', 'Ubuntu Server', 'GStreamer'],
    role: 'Multi-channel IP camera streaming server & 8K edge gateway',
    highlight: 'Simultaneous 8-stream RTSP ingestion & YOLO detection',
    badge: '8K AI Gateway',
    powerDraw: '8W – 18W',
    interfaces: ['PCIe 3.0 M.2', 'Dual HDMI 2.1', '2.5GbE'],
  },

  // ==================== SOM (System on Module) ====================
  {
    id: 'jetson-orin-som',
    name: 'Jetson Orin NX SOM',
    vendor: 'NVIDIA',
    category: 'SOM',
    image: '/images/silicon/jetson-orin-som.svg',
    architecture: '260-Pin SO-DIMM form factor • Up to 100 TOPS Ampere GPU',
    runtimes: ['TensorRT', 'DeepStream', 'JetPack BSP'],
    role: 'Ruggedized outdoor camera hubs, drone payloads & industrial systems',
    highlight: 'Pin-compatible module scaling from 40 TOPS to 100 TOPS',
    badge: 'SO-DIMM SOM',
    powerDraw: '10W – 25W',
    interfaces: ['260-Pin SO-DIMM', 'PCIe Gen4', '4x MIPI CSI'],
  },
  {
    id: 'verdin-imx8m-som',
    name: 'Toradex Verdin i.MX 8M',
    vendor: 'Toradex / NXP',
    category: 'SOM',
    image: '/images/silicon/verdin-imx8m.svg',
    architecture: 'Quad Cortex-A53 + 2.3 TOPS NPU in -40°C to +85°C industrial SOM',
    runtimes: ['Torizon OS', 'eIQ Toolkit', 'Docker'],
    role: 'Harsh-environment industrial automation & automotive gateways',
    highlight: 'Hardened containerized OTA deployments with zero-downtime updates',
    badge: 'Industrial SOM',
    powerDraw: '3W – 7W',
    interfaces: ['260-Pin SO-DIMM', 'Dual GbE TSN', 'CAN-FD'],
  },
  {
    id: 'coral-som',
    name: 'Coral Edge TPU SOM',
    vendor: 'Google',
    category: 'SOM',
    image: '/images/silicon/coral-som.svg',
    architecture: '4 TOPS Edge TPU ASIC in 22x30mm solder-down form factor',
    runtimes: ['Edge TPU Compiler', 'TFLite', 'PyCoral'],
    role: 'Compact co-processor for smart retail shelf cameras & sensor hubs',
    highlight: 'Sub-3ms MobileNet & YOLO-Tiny inference per frame',
    badge: '4 TOPS ASIC',
    powerDraw: '0.5W – 2W',
    interfaces: ['PCIe Gen2 / USB 2.0', 'Solder Pads', 'I2C'],
  },
  {
    id: 'axelera-m2-som',
    name: 'Metis® M.2 Module',
    vendor: 'Axelera AI',
    category: 'SOM',
    image: '/images/silicon/axelera-m2.svg',
    architecture: 'M.2 2280 Key M accelerator card • 214 TOPS Peak INT8',
    runtimes: ['Voyager SDK', 'ONNX Runtime', 'Voyager Flow'],
    role: 'High-density edge AI servers, industrial PCs & video analytics boxes',
    highlight: 'Extreme energy efficiency (~15 TOPS/Watt) in standard M.2 slot',
    badge: 'M.2 Accelerator',
    powerDraw: '12W – 20W',
    interfaces: ['PCIe Gen3 x4 (M.2 Key M)', 'SMBus'],
  },

  // ==================== SENSORS (Smart & AI Vision Sensors) ====================
  {
    id: 'sony-imx500-sensor',
    name: 'Sony IMX500 AI Sensor',
    vendor: 'Sony Semiconductor',
    category: 'SENSORS',
    image: '/images/silicon/sony-imx500.svg',
    architecture: 'Stacked 12.3MP CMOS sensor with integrated Deep Learning DSP',
    runtimes: ['Pi AI Camera SDK', 'AITRIOS', 'libcamera'],
    role: 'On-sensor inference outputting bounding boxes directly over I2C',
    highlight: 'Zero host CPU load and low latency for edge privacy',
    badge: 'On-Sensor AI',
    powerDraw: '< 1W',
    interfaces: ['MIPI CSI-2', 'I2C Control', 'SPI'],
  },
  {
    id: 'intel-realsense-d435',
    name: 'Intel RealSense D435i',
    vendor: 'Intel',
    category: 'SENSORS',
    image: '/images/silicon/realsense-d435.svg',
    architecture: 'Active IR Stereo Vision Depth Engine + RGB Sensor + 6-DOF IMU',
    runtimes: ['librealsense2', 'OpenCV', 'ROS / ROS 2'],
    role: '3D spatial depth mapping & obstacle distance estimation for robotics',
    highlight: 'Real-time synchronized depth & RGB frames for spatial bounding boxes',
    badge: 'Stereo Depth',
    powerDraw: '1.5W – 3.5W',
    interfaces: ['USB 3.1 Type-C', 'Hardware Sync Trigger'],
  },
  {
    id: 'luxonis-oak-d',
    name: 'Luxonis OAK-D Spatial AI',
    vendor: 'Luxonis / OpenCV',
    category: 'SENSORS',
    image: '/images/silicon/oak-d-sensor.svg',
    architecture: 'Triple-camera spatial array with onboard Myriad X / RVC2 AI SoC',
    runtimes: ['DepthAI API', 'OpenVINO', 'Python / C++'],
    role: 'Onboard object detection & stereo depth localization',
    highlight: 'Runs YOLOv8 detection and depth disparity simultaneously on-device',
    badge: 'Spatial AI',
    powerDraw: '2.5W – 5W',
    interfaces: ['USB 3.0 Type-C', 'Gigabit PoE', 'GPIO'],
  },
  {
    id: 'nir-automotive-sensor',
    name: 'NIR In-Cabin Sensor',
    vendor: 'OmniVision / ON Semi',
    category: 'SENSORS',
    image: '/images/silicon/nir-cabin-sensor.svg',
    architecture: 'Global Shutter 940nm NIR sensor with pulsed IR illumination',
    runtimes: ['OpenCV NIR', 'V4L2', 'Python YOLOv8'],
    role: 'Driver Monitoring System: Eye Aspect Ratio (EAR) & distraction detection',
    highlight: 'High 940nm quantum efficiency for facial landmark analysis in pitch dark',
    badge: 'Automotive DMS',
    powerDraw: '1.0W – 2.2W',
    interfaces: ['MIPI CSI-2', 'I2C Control', 'PWM Trigger'],
  },

  // ==================== MCU (Microcontroller Units) ====================
  {
    id: 'esp32-s3-mcu',
    name: 'ESP32-S3 TinyML',
    vendor: 'Espressif Systems',
    category: 'MCU',
    image: '/images/silicon/esp32-s3.svg',
    architecture: 'Dual-Core Xtensa LX7 @ 240MHz + AI Vector Instructions + 8MB PSRAM',
    runtimes: ['ESP-DL', 'TFLite Micro', 'ESP-IDF'],
    role: 'Wake-word detection, acoustic anomaly sensing & visual wake words',
    highlight: 'Vector instructions accelerate INT8 matrix math by 3x',
    badge: 'Vector TinyML',
    powerDraw: '0.1W – 0.5W',
    interfaces: ['Wi-Fi 4', 'Bluetooth 5 LE', 'DVP Camera'],
  },
  {
    id: 'stm32-h7-mcu',
    name: 'STM32H7 / N6 Neural',
    vendor: 'STMicroelectronics',
    category: 'MCU',
    image: '/images/silicon/stm32-h7.svg',
    architecture: 'Dual-Core Cortex-M7/M4 + Neural-ART NPU hardware accelerator',
    runtimes: ['STM32Cube.AI', 'TFLM', 'CMSIS-NN'],
    role: 'Industrial vibration anomaly detection & predictive maintenance',
    highlight: 'Autoencoder compressed into < 256KB SRAM with STM32Cube.AI',
    badge: 'Industrial MCU',
    powerDraw: '0.2W – 0.8W',
    interfaces: ['DVP Camera', 'Ethernet', 'CAN-FD'],
  },
  {
    id: 'rp2350-mcu',
    name: 'Raspberry Pi RP2350',
    vendor: 'Raspberry Pi Ltd',
    category: 'MCU',
    image: '/images/silicon/rp2350-mcu.svg',
    architecture: 'Dual Cortex-M33 / Hazard3 RISC-V @ 150MHz + 12x PIO state machines',
    runtimes: ['Pico SDK', 'TFLM', 'CMSIS-DSP'],
    role: 'Deterministic sensor acquisition, signal filtering & TinyML classification',
    highlight: 'Custom PIO state machines eliminate CPU jitter during sensor reads',
    badge: 'Dual M33 / RISC-V',
    powerDraw: '< 0.3W',
    interfaces: ['12x PIO State Machines', 'Dual SPI', 'Dual I2C'],
  },
  {
    id: 'arduino-nicla-vision-mcu',
    name: 'Arduino Nicla Vision',
    vendor: 'Arduino / Murata',
    category: 'MCU',
    image: '/images/silicon/nicla-vision.svg',
    architecture: 'Dual Cortex-M7/M4 @ 480MHz, 2MP camera, distance ToF sensor & IMU',
    runtimes: ['OpenMV', 'Edge Impulse', 'TFLM'],
    role: 'Battery-operated smart camera node for package tracking & color sorting',
    highlight: 'Complete standalone smart vision node inferencing in < 45ms',
    badge: 'Micro-Vision',
    powerDraw: '0.15W – 0.6W',
    interfaces: ['2MP Camera', 'ToF Sensor', 'BLE / Wi-Fi'],
  },
];
