import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapV3Staker, UniswapV3StakerInterface } from "../UniswapV3Staker";
export declare class UniswapV3Staker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_factory: string, _nonfungiblePositionManager: string, _maxIncentiveStartLeadTime: BigNumberish, _maxIncentiveDuration: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UniswapV3Staker>;
    getDeployTransaction(_factory: string, _nonfungiblePositionManager: string, _maxIncentiveStartLeadTime: BigNumberish, _maxIncentiveDuration: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UniswapV3Staker;
    connect(signer: Signer): UniswapV3Staker__factory;
    static readonly bytecode = "0x6101006040523480156200001257600080fd5b5060405162003ba338038062003ba383398101604081905262000035916200005e565b6001600160601b0319606094851b81166080529290931b90911660a05260c05260e052620000c3565b6000806000806080858703121562000074578384fd5b84516200008181620000aa565b60208601519094506200009481620000aa565b6040860151606090960151949790965092505050565b6001600160a01b0381168114620000c057600080fd5b50565b60805160601c60a05160601c60c05160e051613a816200012260003980610bbd5280610cfa5250806103b15280610c595250806103ed52806104525280610b4852806110555280611ad552508061124c5280611ab45250613a816000f3fe6080604052600436106101295760003560e01c8063b02c43d0116100a5578063c45a015511610074578063e70b9e2711610059578063e70b9e271461034f578063f2d2909b1461036f578063f549ab421461038f57610129565b8063c45a01551461030c578063d953186e1461032157610129565b8063b02c43d01461026c578063b44a27221461029c578063b5ada6e4146102be578063c36c1ea5146102de57610129565b80633c423f0b116100fc5780635cc5e3d9116100e15780635cc5e3d9146101fd578063607777951461021d578063ac9650d81461024c57610129565b80633c423f0b146101c85780633dc0714b146101e857610129565b806301b754401461012e578063150b7a021461015957806326bfee04146101865780632f2d783d146101a8575b600080fd5b34801561013a57600080fd5b506101436103af565b60405161015091906138b9565b60405180910390f35b34801561016557600080fd5b5061017961017436600461273f565b6103d3565b6040516101509190612db4565b34801561019257600080fd5b506101a66101a1366004612a9c565b61071c565b005b3480156101b457600080fd5b506101436101c3366004612946565b61084a565b3480156101d457600080fd5b506101a66101e3366004612ac0565b610928565b3480156101f457600080fd5b50610143610bbb565b34801561020957600080fd5b506101a6610218366004612a72565b610bdf565b34801561022957600080fd5b5061023d6102383660046128f6565b610e10565b604051610150939291906138e6565b61025f61025a3660046127d9565b610e67565b6040516101509190612d36565b34801561027857600080fd5b5061028c6102873660046128f6565b610fc1565b6040516101509493929190612cf5565b3480156102a857600080fd5b506102b1611053565b6040516101509190612de1565b3480156102ca57600080fd5b506101436102d9366004612a57565b611077565b3480156102ea57600080fd5b506102fe6102f9366004612b52565b6111c5565b604051610150929190613881565b34801561031857600080fd5b506102b161124a565b34801561032d57600080fd5b5061034161033c366004612a72565b61126e565b6040516101509291906138c2565b34801561035b57600080fd5b5061014361036a36600461290e565b611493565b34801561037b57600080fd5b506101a661038a366004612a72565b6114b0565b34801561039b57600080fd5b506101a66103aa366004612a72565b61151b565b7f000000000000000000000000000000000000000000000000000000000000000081565b60003373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461044d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104449061375a565b60405180910390fd5b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166399fbab88876040518263ffffffff1660e01b81526004016104a991906138b9565b6101806040518083038186803b1580156104c257600080fd5b505afa1580156104d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fa9190612b73565b505050505096509650505050505060405180608001604052808873ffffffffffffffffffffffffffffffffffffffff168152602001600065ffffffffffff1681526020018360020b81526020018260020b8152506001600088815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548165ffffffffffff021916908365ffffffffffff160217905550604082015181600001601a6101000a81548162ffffff021916908360020b62ffffff160217905550606082015181600001601d6101000a81548162ffffff021916908360020b62ffffff1602179055509050508673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff16877fcdfc765b85e1048bee3c6a0f9d1c91fc7c4631f5fe5745a55fc6843db5c3260f60405160405180910390a483156106ef5760a08414156106ab576106a66106a085870187612a57565b87611964565b6106ef565b60006106b985870187612848565b905060005b81518110156106ec576106e48282815181106106d657fe5b602002602001015189611964565b6001016106be565b50505b507f150b7a0200000000000000000000000000000000000000000000000000000000979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116610769576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044490613183565b60008281526001602052604090205473ffffffffffffffffffffffffffffffffffffffff163381146107c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044490612e86565b60008381526001602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff868116918217909255915191929084169186917fcdfc765b85e1048bee3c6a0f9d1c91fc7c4631f5fe5745a55fc6843db5c3260f91a4505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360209081526040808320338452909152902054811580159061088957508082105b156108915750805b73ffffffffffffffffffffffffffffffffffffffff841660009081526003602090815260408083203384529091529020805482900390556108d3848483611ed1565b8273ffffffffffffffffffffffffffffffffffffffff167f106f923f993c2149d49b4255ff723acafa1f2d94393f561d3eda32ae348f72418260405161091991906138b9565b60405180910390a29392505050565b73ffffffffffffffffffffffffffffffffffffffff8216301415610978576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610444906137b7565b6000838152600160209081526040918290208251608081018452905473ffffffffffffffffffffffffffffffffffffffff8116825265ffffffffffff740100000000000000000000000000000000000000008204169282018390527a0100000000000000000000000000000000000000000000000000008104600290810b810b810b948301949094527d0100000000000000000000000000000000000000000000000000000000009004830b830b90920b606083015215610a65576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044490613046565b805173ffffffffffffffffffffffffffffffffffffffff163314610ab5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044490613481565b6000848152600160205260408082208290558251905173ffffffffffffffffffffffffffffffffffffffff9091169086907fcdfc765b85e1048bee3c6a0f9d1c91fc7c4631f5fe5745a55fc6843db5c3260f908490a46040517fb88d4fde00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063b88d4fde90610b83903090879089908890600401612cac565b600060405180830381600087803b158015610b9d57600080fd5b505af1158015610bb1573d6000803e3d6000fd5b5050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008111610c19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610444906135be565b8160400151421115610c57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610444906131e0565b7f0000000000000000000000000000000000000000000000000000000000000000428360400151031115610cb7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104449061361b565b8160600151826040015110610cf8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610444906136d7565b7f000000000000000000000000000000000000000000000000000000000000000082604001518360600151031115610d5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044490613679565b6000610d67836120ad565b60008181526020819052604090208054840190558351909150610d8c903330856120de565b826020015173ffffffffffffffffffffffffffffffffffffffff16836000015173ffffffffffffffffffffffffffffffffffffffff167fa876344e28d4b5191ad03bc0d43f740e3695827ab0faccac739930b915ef8b0285604001518660600151876080015187604051610e039493929190613920565b60405180910390a3505050565b6000602081905290815260409020805460019091015473ffffffffffffffffffffffffffffffffffffffff8116907401000000000000000000000000000000000000000090046bffffffffffffffffffffffff1683565b60608167ffffffffffffffff81118015610e8057600080fd5b50604051908082528060200260200182016040528015610eb457816020015b6060815260200190600190039081610e9f5790505b50905060005b82811015610fba5760008030868685818110610ed257fe5b9050602002810190610ee49190613951565b604051610ef2929190612c9c565b600060405180830381855af49150503d8060008114610f2d576040519150601f19603f3d011682016040523d82523d6000602084013e610f32565b606091505b509150915081610f9857604481511015610f4b57600080fd5b60048101905080806020019051810190610f6591906129df565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104449190612e16565b80848481518110610fa557fe5b60209081029190910101525050600101610eba565b5092915050565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff81169065ffffffffffff74010000000000000000000000000000000000000000820416907a0100000000000000000000000000000000000000000000000000008104600290810b917d0100000000000000000000000000000000000000000000000000000000009004900b84565b7f000000000000000000000000000000000000000000000000000000000000000081565b600081606001514210156110b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044490612f66565b60006110c2836120ad565b6000818152602081905260409020805493509091508261110e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044490612e29565b60018101547401000000000000000000000000000000000000000090046bffffffffffffffffffffffff1615611170576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610444906134de565b6000815583516080850151611186919085611ed1565b817f65124e6175aa9904f40735e87e2a37c76e87a609b855287bb4d1aba8257d9763846040516111b691906138b9565b60405180910390a25050919050565b60008281526002602090815260408083208484529091529020805473ffffffffffffffffffffffffffffffffffffffff8116916bffffffffffffffffffffffff740100000000000000000000000000000000000000009092048216918214156112425760018101546fffffffffffffffffffffffffffffffff1691505b509250929050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080600061127c856120ad565b905060008061128b86846111c5565b915091506000816fffffffffffffffffffffffffffffffff16116112db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044490612f09565b60008681526001602081815260408084208151608081018352905473ffffffffffffffffffffffffffffffffffffffff80821683527401000000000000000000000000000000000000000080830465ffffffffffff16848701527a0100000000000000000000000000000000000000000000000000008304600290810b810b810b8587019081527d010000000000000000000000000000000000000000000000000000000000909404810b810b900b60608086019182528c8a52898852868a2087519182018852805482529098015480841689890152919091046bffffffffffffffffffffffff1687860152948e01519151945193517fa38807f200000000000000000000000000000000000000000000000000000000815292969491169263a38807f29261140e929190600401612e02565b60606040518083038186803b15801561142657600080fd5b505afa15801561143a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145e9190612986565b50915050611482826000015183602001518c604001518d60600151888a87426122c3565b909b909a5098505050505050505050565b600360209081526000928352604080842090915290825290205481565b60008181526001602052604090205473ffffffffffffffffffffffffffffffffffffffff16331461150d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044490613561565b6115178282611964565b5050565b6000818152600160209081526040918290208251608081018452905473ffffffffffffffffffffffffffffffffffffffff8116825265ffffffffffff74010000000000000000000000000000000000000000820416928201929092527a0100000000000000000000000000000000000000000000000000008204600290810b810b810b938201939093527d010000000000000000000000000000000000000000000000000000000000909104820b820b90910b60608083019190915283015142101561163157805173ffffffffffffffffffffffffffffffffffffffff163314611631576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104449061331e565b600061163c846120ad565b905060008061164b85846111c5565b91509150806fffffffffffffffffffffffffffffffff166000141561169c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044490612fe9565b600083815260208181526040808320888452600180845282852080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff65ffffffffffff740100000000000000000000000000000000000000008084048216830190911681027fffffffffffff000000000000ffffffffffffffffffffffffffffffffffffffff9093169290921790925591830180546bffffffffffffffffffffffff848204811690930190921690920273ffffffffffffffffffffffffffffffffffffffff91821617909155928a01518883015160608a015193517fa38807f2000000000000000000000000000000000000000000000000000000008152929594919091169263a38807f2926117b7929190600401612e02565b60606040518083038186803b1580156117cf57600080fd5b505afa1580156117e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118079190612986565b508354600185015460408c015160608d0151939550600094508493611848939273ffffffffffffffffffffffffffffffffffffffff169190898b89426122c3565b6001860180547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff9182168401821617909155865483900387558c51811660009081526003602090815260408083208e5190941683529281528282208054860190558d8252600281528282208c8352905290812090815591935091506bffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff87161061192a576001810180547fffffffffffffffffffffffffffffffff000000000000000000000000000000001690555b60405188908b907fe1ba67e807ae0efa0a9549f9520ddc15c27f0a4dae2bc045e800ca66a940778f90600090a35050505050505050505050565b81604001514210156119a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610444906133a1565b816060015142106119df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044490613126565b60006119ea836120ad565b600081815260208190526040902054909150611a32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610444906132c1565b60008281526002602090815260408083208484529091529020547401000000000000000000000000000000000000000090046bffffffffffffffffffffffff1615611aa9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610444906130c9565b600080600080611afa7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000088612345565b9350935093509350866020015173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614611b6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610444906133fe565b6000816fffffffffffffffffffffffffffffffff1611611bb7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044490613263565b6000868152600160208181526040808420805465ffffffffffff740100000000000000000000000000000000000000008083048216870190911681027fffffffffffff000000000000ffffffffffffffffffffffffffffffffffffffff9092169190911790915589855291849052808420830180546bffffffffffffffffffffffff848204811690950190941690920273ffffffffffffffffffffffffffffffffffffffff93841617909155517fa38807f20000000000000000000000000000000000000000000000000000000081529086169063a38807f290611ca19087908790600401612e02565b60606040518083038186803b158015611cb957600080fd5b505afa158015611ccd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cf19190612986565b509150506bffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff831610611e0a576040805160608101825273ffffffffffffffffffffffffffffffffffffffff80841682526bffffffffffffffffffffffff60208084018281526fffffffffffffffffffffffffffffffff80891686880190815260008f8152600285528881208f82529094529690922094518554915190931674010000000000000000000000000000000000000000029284167fffffffffffffffffffffffff000000000000000000000000000000000000000090911617909216178255915160019091018054919092167fffffffffffffffffffffffffffffffff00000000000000000000000000000000909116179055611e8e565b6000878152600260209081526040808320898452909152902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8381169190911716740100000000000000000000000000000000000000006bffffffffffffffffffffffff8516021790555b85877f3fe90ccd0a34e28f2b4b7a1e8323415ed9dd595f4eec5dfd461d18c2df336dbd84604051611ebf9190613864565b60405180910390a35050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251825160009485949389169392918291908083835b60208310611fa657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611f69565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612008576040519150601f19603f3d011682016040523d82523d6000602084013e61200d565b606091505b509150915081801561203b57508051158061203b575080806020019051602081101561203857600080fd5b50515b6120a657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f5354000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b5050505050565b6000816040516020016120c09190613814565b6040516020818303038152906040528051906020012090505b919050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000178152925182516000948594938a169392918291908083835b602083106121bb57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161217e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461221d576040519150601f19603f3d011682016040523d82523d6000602084013e612222565b606091505b5091509150818015612250575080511580612250575080806020019051602081101561224d57600080fd5b50515b6122bb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f5354460000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b505050505050565b600080878310156122d057fe5b508383036fffffffffffffffffffffffffffffffff861602600073ffffffffffffffffffffffffffffffffffffffff8a1660808a61230e8b8861244e565b03901b0390506123358b8373ffffffffffffffffffffffffffffffffffffffff1683612467565b9250509850989650505050505050565b60008060008060008060008873ffffffffffffffffffffffffffffffffffffffff166399fbab88896040518263ffffffff1660e01b8152600401808281526020019150506101806040518083038186803b1580156123a257600080fd5b505afa1580156123b6573d6000803e3d6000fd5b505050506040513d6101808110156123cd57600080fd5b50604080820151606080840151608085015160a086015160c087015160e0909701518651948501875273ffffffffffffffffffffffffffffffffffffffff80871686528416602086015262ffffff8316968501969096529b50949950929750909550909350909150612440908b90612534565b965050505093509350935093565b60008183101561245e5781612460565b825b9392505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff858709868602925082811090839003039050806124bb57600084116124b057600080fd5b508290049050612460565b8084116124c757600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff161061257657600080fd5b508051602080830151604093840151845173ffffffffffffffffffffffffffffffffffffffff94851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b80516120d981613a4f565b8051600281900b81146120d957600080fd5b600060a08284031215612698578081fd5b60405160a0810181811067ffffffffffffffff821117156126b557fe5b60405290508082356126c681613a4f565b815260208301356126d681613a4f565b80602083015250604083013560408201526060830135606082015260808301356126ff81613a4f565b6080919091015292915050565b80516fffffffffffffffffffffffffffffffff811681146120d957600080fd5b805162ffffff811681146120d957600080fd5b600080600080600060808688031215612756578081fd5b853561276181613a4f565b9450602086013561277181613a4f565b935060408601359250606086013567ffffffffffffffff80821115612794578283fd5b818801915088601f8301126127a7578283fd5b8135818111156127b5578384fd5b8960208285010111156127c6578384fd5b9699959850939650602001949392505050565b600080602083850312156127eb578182fd5b823567ffffffffffffffff80821115612802578384fd5b818501915085601f830112612815578384fd5b813581811115612823578485fd5b8660208083028501011115612836578485fd5b60209290920196919550909350505050565b6000602080838503121561285a578182fd5b823567ffffffffffffffff80821115612871578384fd5b818501915085601f830112612884578384fd5b81358181111561289057fe5b61289d84858302016139bb565b818152848101925083850160a0808402860187018a10156128bc578788fd5b8795505b838610156128e8576128d28a83612687565b85526001959095019493860193908101906128c0565b509098975050505050505050565b600060208284031215612907578081fd5b5035919050565b60008060408385031215612920578182fd5b823561292b81613a4f565b9150602083013561293b81613a4f565b809150509250929050565b60008060006060848603121561295a578081fd5b833561296581613a4f565b9250602084013561297581613a4f565b929592945050506040919091013590565b60008060006060848603121561299a578081fd5b83518060060b81146129aa578182fd5b60208501519093506129bb81613a4f565b604085015190925063ffffffff811681146129d4578182fd5b809150509250925092565b6000602082840312156129f0578081fd5b815167ffffffffffffffff811115612a06578182fd5b8201601f81018413612a16578182fd5b8051612a29612a24826139df565b6139bb565b818152856020838501011115612a3d578384fd5b612a4e826020830160208601613a1f565b95945050505050565b600060a08284031215612a68578081fd5b6124608383612687565b60008060c08385031215612a84578182fd5b612a8e8484612687565b9460a0939093013593505050565b60008060408385031215612aae578182fd5b82359150602083013561293b81613a4f565b600080600060608486031215612ad4578081fd5b833592506020840135612ae681613a4f565b9150604084013567ffffffffffffffff811115612b01578182fd5b8401601f81018613612b11578182fd5b8035612b1f612a24826139df565b818152876020838501011115612b33578384fd5b8160208401602083013783602083830101528093505050509250925092565b60008060408385031215612b64578182fd5b50508035926020909101359150565b6000806000806000806000806000806000806101808d8f031215612b9557898afd5b8c516bffffffffffffffffffffffff81168114612bb0578a8bfd5b9b50612bbe60208e0161266a565b9a50612bcc60408e0161266a565b9950612bda60608e0161266a565b9850612be860808e0161272c565b9750612bf660a08e01612675565b9650612c0460c08e01612675565b9550612c1260e08e0161270c565b94506101008d015193506101208d01519250612c316101408e0161270c565b9150612c406101608e0161270c565b90509295989b509295989b509295989b565b60008151808452612c6a816020860160208601613a1f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000828483379101908152919050565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152612ceb6080830184612c52565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff94909416845265ffffffffffff929092166020840152600290810b60408401520b606082015260800190565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015612da7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452612d95858351612c52565b94509285019290850190600101612d5b565b5092979650505050505050565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600292830b8152910b602082015260400190565b6000602082526124606020830184612c52565b60208082526032908201527f556e697377617056335374616b65723a3a656e64496e63656e746976653a206e60408201527f6f20726566756e6420617661696c61626c650000000000000000000000000000606082015260800190565b60208082526045908201527f556e697377617056335374616b65723a3a7472616e736665724465706f73697460408201527f3a2063616e206f6e6c792062652063616c6c6564206279206465706f7369742060608201527f6f776e6572000000000000000000000000000000000000000000000000000000608082015260a00190565b60208082526034908201527f556e697377617056335374616b65723a3a676574526577617264496e666f3a2060408201527f7374616b6520646f6573206e6f74206578697374000000000000000000000000606082015260800190565b60208082526043908201527f556e697377617056335374616b65723a3a656e64496e63656e746976653a206360408201527f616e6e6f7420656e6420696e63656e74697665206265666f726520656e64207460608201527f696d650000000000000000000000000000000000000000000000000000000000608082015260a00190565b60208082526033908201527f556e697377617056335374616b65723a3a756e7374616b65546f6b656e3a207360408201527f74616b6520646f6573206e6f7420657869737400000000000000000000000000606082015260800190565b60208082526042908201527f556e697377617056335374616b65723a3a7769746864726177546f6b656e3a2060408201527f63616e6e6f7420776974686472617720746f6b656e207768696c65207374616b60608201527f6564000000000000000000000000000000000000000000000000000000000000608082015260a00190565b60208082526031908201527f556e697377617056335374616b65723a3a7374616b65546f6b656e3a20746f6b60408201527f656e20616c7265616479207374616b6564000000000000000000000000000000606082015260800190565b6020808252602c908201527f556e697377617056335374616b65723a3a7374616b65546f6b656e3a20696e6360408201527f656e7469766520656e6465640000000000000000000000000000000000000000606082015260800190565b6020808252603c908201527f556e697377617056335374616b65723a3a7472616e736665724465706f73697460408201527f3a20696e76616c6964207472616e7366657220726563697069656e7400000000606082015260800190565b60208082526049908201527f556e697377617056335374616b65723a3a637265617465496e63656e7469766560408201527f3a2073746172742074696d65206d757374206265206e6f77206f7220696e207460608201527f6865206675747572650000000000000000000000000000000000000000000000608082015260a00190565b602080825260409082018190527f556e697377617056335374616b65723a3a7374616b65546f6b656e3a2063616e908201527f6e6f74207374616b6520746f6b656e20776974682030206c6971756964697479606082015260800190565b60208082526033908201527f556e697377617056335374616b65723a3a7374616b65546f6b656e3a206e6f6e60408201527f2d6578697374656e7420696e63656e7469766500000000000000000000000000606082015260800190565b60208082526056908201527f556e697377617056335374616b65723a3a756e7374616b65546f6b656e3a206f60408201527f6e6c79206f776e65722063616e20776974686472617720746f6b656e2062656660608201527f6f726520696e63656e7469766520656e642074696d6500000000000000000000608082015260a00190565b60208082526032908201527f556e697377617056335374616b65723a3a7374616b65546f6b656e3a20696e6360408201527f656e74697665206e6f7420737461727465640000000000000000000000000000606082015260800190565b60208082526041908201527f556e697377617056335374616b65723a3a7374616b65546f6b656e3a20746f6b60408201527f656e20706f6f6c206973206e6f742074686520696e63656e7469766520706f6f60608201527f6c00000000000000000000000000000000000000000000000000000000000000608082015260a00190565b6020808252603d908201527f556e697377617056335374616b65723a3a7769746864726177546f6b656e3a2060408201527f6f6e6c79206f776e65722063616e20776974686472617720746f6b656e000000606082015260800190565b6020808252604d908201527f556e697377617056335374616b65723a3a656e64496e63656e746976653a206360408201527f616e6e6f7420656e6420696e63656e74697665207768696c65206465706f736960608201527f747320617265207374616b656400000000000000000000000000000000000000608082015260a00190565b60208082526037908201527f556e697377617056335374616b65723a3a7374616b65546f6b656e3a206f6e6c60408201527f79206f776e65722063616e207374616b6520746f6b656e000000000000000000606082015260800190565b60208082526039908201527f556e697377617056335374616b65723a3a637265617465496e63656e7469766560408201527f3a20726577617264206d75737420626520706f73697469766500000000000000606082015260800190565b602080825260409082018190527f556e697377617056335374616b65723a3a637265617465496e63656e74697665908201527f3a2073746172742074696d6520746f6f2066617220696e746f20667574757265606082015260800190565b602080825260409082018190527f556e697377617056335374616b65723a3a637265617465496e63656e74697665908201527f3a20696e63656e74697665206475726174696f6e20697320746f6f206c6f6e67606082015260800190565b60208082526044908201527f556e697377617056335374616b65723a3a637265617465496e63656e7469766560408201527f3a2073746172742074696d65206d757374206265206265666f726520656e642060608201527f74696d6500000000000000000000000000000000000000000000000000000000608082015260a00190565b60208082526032908201527f556e697377617056335374616b65723a3a6f6e4552433732315265636569766560408201527f643a206e6f74206120756e697633206e66740000000000000000000000000000606082015260800190565b60208082526039908201527f556e697377617056335374616b65723a3a7769746864726177546f6b656e3a2060408201527f63616e6e6f7420776974686472617720746f207374616b657200000000000000606082015260800190565b815173ffffffffffffffffffffffffffffffffffffffff90811682526020808401518216908301526040808401519083015260608084015190830152608092830151169181019190915260a00190565b6fffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff9290921682526fffffffffffffffffffffffffffffffff16602082015260400190565b90815260200190565b91825273ffffffffffffffffffffffffffffffffffffffff16602082015260400190565b92835273ffffffffffffffffffffffffffffffffffffffff9190911660208301526bffffffffffffffffffffffff16604082015260600190565b938452602084019290925273ffffffffffffffffffffffffffffffffffffffff166040830152606082015260800190565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112613985578283fd5b83018035915067ffffffffffffffff82111561399f578283fd5b6020019150368190038213156139b457600080fd5b9250929050565b60405181810167ffffffffffffffff811182821017156139d757fe5b604052919050565b600067ffffffffffffffff8211156139f357fe5b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60005b83811015613a3a578181015183820152602001613a22565b83811115613a49576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff81168114613a7157600080fd5b5056fea164736f6c6343000706000a";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): UniswapV3StakerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV3Staker;
}
