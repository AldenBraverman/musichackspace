/* Declares the musichackspace Audio Worklet Processor */

class musichackspace_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.musichackspace;
    super(options);
  }
}

registerProcessor("musichackspace", musichackspace_AWP);
