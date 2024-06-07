
    const ar_wallpaper = `https://raw.githubusercontent.com/underpaks/Chroma/main/Assets/Images/bgb64.txt`;
    let imageBase64 = '';

    // Requisição para pegar a imagem wallpaper em Base64
    GM_xmlhttpRequest({
        method: "GET",
        url: ar_wallpaper,
        onload: function(response) {
            if (response.status === 200) {
                imageBase64 = response.responseText.trim();
                applyInitialTheme();
            } else {
                console.error('Failed to load image');
            }
        },
        onerror: function() {
            console.error('Request failed');
        }
    });

    function applyInitialTheme() {
        const tema = `
        .Common-entranceGradient { background: none !important }
        body,
        .Common-changingBackground,
        .LobbyLoaderComponentStyle-container,
        .Common-container,
        .ClanCreateComponentStyle-blockCreatureClan,
        .ClanCommonStyle-content,
        .SuccessfulPurchaseComponentStyle-container,
        .RankupComponentStyle-wrapper {
        background-image: radial-gradient(50% 100% at 50% 100%,
            transparent,
            rgb(0, 4, 41)) !important;
        animation: gradientAnimation 20s linear infinite;
        }

        .ShopCategoryOfferSectionStyle-innerContainer {background-color: transparent !important},

         /*menu pause button and overlay*/
        .BattlePauseMenuComponentStyle-blackGlobalWrapper {
        background: linear-gradient(0deg, rgba(0, 4, 41, 0.75) 0%, rgba(0, 4, 41, 0.85) 100%) center center / cover no-repeat !important;
        }

        .BattlePauseMenuComponentStyle-selectedMenuRedButton {
        border: 2px solid rgb(104 119 255);
        }

        /*container info user*/
        .MainScreenComponentStyle-containerPanel { backdrop-filter: blur(5px)}

        /*battle modes*/

                .DialogContainerComponentStyle-container {background: rgba(0, 4, 41, 0.5)}

             .ScrollingCardsComponentStyle-scrollCard .Common-backgroundImageCover {
            position: relative;
        }
        .ScrollingCardsComponentStyle-scrollCard .Common-backgroundImageCover::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(360deg, rgba(0, 4, 41, 0.5) 0%, rgba(0, 25, 38, 0) 50%),
                        linear-gradient(rgba(0, 4, 41, 0.5) 0%, rgba(0, 26, 39, 0) 50%);
            pointer-events: none;
            z-index: 1;
        }
        .ScrollingCardsComponentStyle-scrollCard .Common-backgroundImageCover > * {
            position: relative;
            z-index: 2;
        }

       .ScrollingCardsComponentStyle-cardCount {background-color: rgb(255 87 39) !important}
       .ScrollingCardsComponentStyle-scrollCard {min-width: 28.5em !important;}

       .MainSectionComponentStyle-transformLinearGradientImgCard {background: linear-gradient(rgb(0 4 41 / 100%) 0%, rgb(0 4 41 / 0%) 100%) !important;}

       .Common-activeMenu { color: rgb(255 87 39); }
       .Common-menuItemActive { background-color: rgb(255 87 39); box-shadow: rgb(255 87 39) 0em 0em 0.375em !important; }
       .MenuComponentStyle-mainMenuItem:hover {color: rgb(255 87 39) !important;}
       .Common-backgroundImageCover.modeLimitIcon {width: 30em !important;}

       .UsersTableStyle-rowBattleEmpty,
       .Common-flexStartAlignStartColumn .UsersTableStyle-row,
       .UsersTableStyle-cellName.UsersTableStyle-centerCell.UsersTableStyle-fontCell.UsersTableStyle-rowBattle {border-radius: 10px !important;}

       .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr {
       background-color: rgb(255 51 51 / 15%) !important;
       border: 1px solid rgb(255 51 51) !important;
       border-radius: 10px !important;
       }

       .BattleTabStatisticComponentStyle-header {rgb(0 4 41 / 47%) !important;}
       .BattleTabStatisticComponentStyle-containerInsideTeams {background-color: rgb(0 4 41 / 43%) !important;}
       .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr { border: 1px solid rgb(118, 255, 51) !important; border-radius: 10px !important;}
        .BattlePauseMenuComponentStyle-redMenuButton span { color: rgb(104 119 255) !important; }
        .BattlePauseMenuComponentStyle-redMenuButton:hover {background-color: rgb(104 119 255 / 15%);}

        .BattleTabStatisticComponentStyle-rowBackGround {background-color: rgb(118 255 51 / 13%);}
        .BattleTabStatisticComponentStyle-selectedRowBackGround {background-color: rgb(118 255 51 / 33%);}

        .SettingsComponentStyle-settingsBlockOptions {
            background-color: transparent;
        }

        .BattleModesComponentStyle-blockModesFilter.ProBattleCommonStyleMobile-blockModesFilter {
            background-color: rgb(0 4 41 / 100%)
        }

        .BattleModesComponentStyle-button {
            background-color: rgb(0 4 41 / 100%)
        }

        .BattleModesComponentStyle-search {
            background-color: rgb(0 4 41 / 100%)
        }

        .NewsComponentStyle-closeArea {
            background-color: rgba(0, 9, 14, 0.35)
        }

        .ContextMenuStyle-menu {
            background-color: rgb(0 4 41 / 100%)
        }

        .BattleInfoComponentStyle-commonBlockSelectedOptionsSettings {
            backdrop-filter: blur(10px);
            background-color: rgb(0, 4, 41, 40%);
        }

        .ProBattlesComponentStyle-mainContainer.Common-flexCenterAlignCenterColumn:nth-child(1) {
            background-color: rgb(0 4 41 / 100%)
        }

        .ModalStyle-rootHover .Common-displayFlexColumn {
            backdrop-filter: blur(10px);
            background-color: rgb(0, 4, 41, 40%);
        }

        .ItemDescriptionComponentStyle-commonBlockModal {
            backdrop-filter: blur(10px);
            background-color: rgb(0, 4, 41, 40%);
        }

        .ListItemsComponentStyle-itemsListContainer {
            background: linear-gradient(rgba(0, 25, 38, 0) 0%, rgb(0, 4, 41) 100%);
        }

        .BattlePassLobbyComponentStyle-menuBattlePass {
            background: linear-gradient(0deg, rgba(0, 25, 38, 0.25) 0%, rgb(0 4 41) 100%);
        }

        .QuestsChallengesComponentStyle-containerTiers,
        .ChallengePurchaseComponentStyle-blockPurchase {
            background-color: transparent
        }

        .PrimaryMenuItemComponentStyle-itemCommonLi:hover {
            background-color: rgba(0, 9, 14, 0.46);
            backdrop-filter: blur(10px)
        }

        .TutorialModalComponentStyle-contentWrapper {
            background: radial-gradient(192.86% 100% at 0% 100%, rgb(14 22 30) 0%, rgba(191, 213, 255, 0) 100%), rgb(0 9 14)
        }

        .ChatComponentStyle-chatWindow {
            background-color: rgb(0 4 41 / 76%)
        }

        .ChatComponentStyle-channelSelect.Font-bold.Font-normal {
            background-color: rgb(0 4 41 / 76%)
        }

        /*chat user nick */
        .ChatComponentStyle-chatRegularUser {
            color: rgb(0 164 255)
        }

        .ChatComponentStyle-closeArea {
            background-color: rgba(0, 4, 41, 0.35)
        }

        .NewsComponentStyle-newsWindow { background: rgb(0 4 41 / 63%) !important; }

        @keyframes gradientAnimation {

            0% {
                background-color: #cc0d0d;
                /* Vermelho */
            }

            10% {
                background-color: #d22700;
                /* Laranja mais escuro */
            }

            20% {
                background-color: #de4600;
                /* Laranja */
            }

            30% {
                background-color: #cc7e0d;
                /* Amarelo-alaranjado */
            }

            40% {
                background-color: #ccaf0d;
                /* Amarelo */
            }

            50% {
                background-color: #74cc0d;
                /* Verde claro */
            }

            60% {
                background-color: #41cc0d;
                /* Verde */
            }

            70% {
                background-color: #0dcacc;
                /* Ciano */
            }

            80% {
                background-color: #0d75cc;
                /* Azul claro */
            }

            90% {
                background-color: #0d44cc;
                /* Azul */
            }

            100% {
                background-color: #5a07b3;
                /* Roxo */
            }
        }
        `;
        const body = document.body || document.getElementsByTagName('body')[0],
              style = document.createElement('style');

        style.className = 'chromaref';
        if (style.styleSheet) {
            style.styleSheet.cssText = tema;
        } else {
            style.appendChild(document.createTextNode(tema));
        }

        body.appendChild(style);
    }

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Node.ELEMENT_NODE
                    applyStylesToNode(node);
                }
            });
        });
    });

    function applyStylesToNode(node) {
        if (node.classList && node.classList.contains('Common-backgroundImageCover')) {
            node.style.position = 'relative';
            node.style.backgroundBlendMode = 'overlay, overlay';
            node.style.backgroundImage = `
                linear-gradient(360deg, rgba(0, 4, 41, 0.5) 0%, rgba(0, 25, 38, 0) 50%),
                linear-gradient(rgba(0, 4, 41, 0.5) 0%, rgba(0, 26, 39, 0) 50%)
            `;
        }
    }

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
