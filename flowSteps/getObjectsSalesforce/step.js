step.getObjectsSalesforce = function (inputs) {

	var inputsLogic = {
		apiVersion: inputs.apiVersion || "v1"
	};

	return endpoint.sobjects.get(inputsLogic.apiVersion);
};